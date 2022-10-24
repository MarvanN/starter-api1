import { Column, Model, Table, HasMany } from 'sequelize-typescript';

@Table
export class User extends Model {
    @Column
    name: string;

    @Column
    age: string;

    @Column
    surname: string;

    @Column
    email: string;

}