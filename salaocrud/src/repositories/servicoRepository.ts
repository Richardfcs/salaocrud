import { AppDataSource } from "../db/data-source";
import { Servico } from "../model/servico";

class ServicoRepository {
    servicoRepository = AppDataSource.getRepository(Servico);

    async save(servico: Servico): Promise<Servico> {
        try {
            this.servicoRepository.save(servico);
            return servico;
        } catch (err) {
            throw new Error("Falha ao criar o serviço!");
        }
    }
    async getAll(): Promise<Array<Servico>> {
        try {
            return this.servicoRepository.find();
        } catch (error) {
            throw new Error("Falha ao retornar os serviços!");
        }
    }

    async getById(id: number): Promise<Servico | null> {
        try {
            return this.servicoRepository.findOneBy({
                idServico: id,
            });
        } catch (error) {
            throw new Error("Falha ao buscar o serviço!");
        }
    }

    async update(servico: Servico) {
        try {
            this.servicoRepository.save(servico);
        } catch (error) {
            throw new Error("Falha ao atualizar o serviço!");
        }
    }

    async delete(id: number): Promise<number> {
        try {
            const servicoEncontrado = await this.servicoRepository.findOneBy({
                idServico: id,
            });
            if (servicoEncontrado) {
                this.servicoRepository.remove(servicoEncontrado);
                return 1;
            }
            return 0;
        } catch (error) {
            throw new Error("Falha ao deletar o serviço!");
        }
    }
// repositories/ServicoRepository.ts

    async deleteAll(): Promise<number> {
        try {
            const result = await this.servicoRepository.createQueryBuilder()
                .delete()
                .execute();
            return result.affected || 0;
        } catch (error) {
            throw new Error("Falha ao deletar todos os serviços!");
        }
    }
}

export default new ServicoRepository();