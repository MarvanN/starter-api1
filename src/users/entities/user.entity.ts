// export class User {
//     constructor(
//         public id: string,
//         public name: string,
//         public age: number,
//         public surname: string,
//         public email: string
//     ) { }
// }

import { Column, Model, Table, HasMany } from 'sequelize-typescript';
// import { Photo } from '../photos/photo.model';

@Table
export class User extends Model {
  @Column
  id: string;

  @Column
  name: string;

  @Column
  age: string;

  @Column
  surname: string;

  @Column
  email: string;

//   @Column({ defaultValue: true })
//   isActive: boolean;

//   @HasMany(() => Photo)
//   photos: Photo[];
}
