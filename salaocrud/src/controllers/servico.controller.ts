import { Request, Response } from "express";
import { Servico } from "../model/servico";
import servicoRepository from "../repositories/servicoRepository";

export default class ServicoController {
    async create(req: Request, res: Response) {
        if (!req.body.nome) {
            res.status(400).send({
                message: "Nome do serviço não pode ser vazio!"
            });
            return;
        }

        try {
            const servico: Servico = req.body;
            const savedServico = await servicoRepository.save(servico);
            res.status(201).send(savedServico);
        } catch (err) {
            res.status(500).send({
                message: "Erro ao tentar salvar um serviço."
            });
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const servicos = await servicoRepository.getAll();
            res.status(200).send(servicos);
        } catch (err) {
            res.status(500).send({
                message: "Erro encontrado quando estava se fazendo a busca por todos os serviços."
            });
        }
    }

    async getById(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);

        try {
            const servico = await servicoRepository.getById(id);
            if (servico) res.status(200).send(servico);
            else
                res.status(404).send({
                    message: `Não foi encontrado nenhum serviço com esse id=${id}.`
                });
        } catch (err) {
            res.status(500).send({
                message: `Erro: não foi possível retornar o serviço com id=${id}.`
            });
        }
    }

    async update(req: Request, res: Response) {
        let servico: Servico = req.body;
        servico.idServico = parseInt(req.params.id); // Define o ID diretamente no objeto servico

        try {
            await servicoRepository.update(servico);
            res.send({
                message: `Serviço ${servico.nome} atualizado com sucesso!`
            });
        } catch (err) {
            res.status(500).send({
                message: `Erro ao atualizar o serviço com id=${servico.idServico}.`
            });
        }
    }

    async remove(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);

        try {
            const num = await servicoRepository.delete(id);

            if (num == 1) {
                res.send({
                    message: "Serviço deletado com sucesso!"
                });
            } else {
                res.send({
                    message: `Não foi possível deletar o serviço com id=${id}. O serviço não foi encontrado.`,
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `O serviço com id==${id}, não pode ser deletado.`
            });
        }
    }

    async deleteAll(req: Request, res: Response) {
        try {
            const num = await servicoRepository.deleteAll();

            res.send({ message: `${num} Serviços foram deletados com sucesso!` });
        } catch (err) {
            res.status(500).send({
                message: "Algum erro ocorreu enquato deletava todos os serviços."
            });
        }
    }
}