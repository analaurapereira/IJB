import { ReactNode } from "react";

export interface Familia {
    statusFamilia: ReactNode;
    nomeFamilia: ReactNode;
    id: number;
    name: string;
    renda: number;
    situacao: string;
    numeroFamiliares: number;
    priority: boolean;
    status: string;
  }
  
  export interface Visit {
    nomeVoluntario: ReactNode;
    nomeFamilia: string;
    id: number;
    name: string;
    data: string;
    relatorio: string;
  }

  export interface User {
    email: string;
    password: string;
    role: 'BENEFICIARIO' | 'VOLUNTARIO' | 'ADMIN';
  }