
import { describe, it, expect, vi } from 'vitest';
import {create_scode} from '../utils/creat_scode.mjs'
import {nodemaile} from '../src/nodemaile.mjs'
import request from "supertest";
import app from '../index.mjs'

vi.mock('../utils/creat_scode.mjs',()=> {
    return { create_scode: vi.fn() }
})

vi.mock('../src/nodemaile.mjs', ()=>{ return {nodemaile: vi.fn()}})

describe('Criando Um Novo Usuário', async () => {
    create_scode.mockResolvedValue("1232")
    nodemaile.mockResolvedValue(true)
    const scode = await create_scode()
    const payload = {
        user_mail: 'test@email.com',
        user_pass: '3decd49a6c6dce88c16a85b9a8e42b51aa36f1e2'
    }
    const response = await request(app).post('/user-sigin').send(payload)

    it('should add two numbers correctly', () => {
        expect(response.status).toBe("1232");
    });

});

