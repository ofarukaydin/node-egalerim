import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { User } from "./User";
import { Field, ObjectType, ID, Int } from "type-graphql";

@ObjectType()
@Entity()
export class Cariler extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn({
    type: "integer"
  })
  id: number;

  @Field()
  @Column("character varying", {
    nullable: false
  })
  isim: string;

  @Field()
  @Column("character varying", {
    nullable: false
  })
  tc_no: string;

  @Field(() => String, { nullable: true })
  @Column("character varying", {
    nullable: true
  })
  vergi_no: string | null;

  @Field(() => String, { nullable: true })
  @Column("character varying", {
    nullable: true
  })
  email: string | null;

  @Field(() => String, { nullable: true })
  @Column("character varying", {
    nullable: true
  })
  tel_no: string | null;

  @Field(() => String, { nullable: true })
  @Column("character varying", {
    nullable: true
  })
  adres: string | null;

  @Field(() => String, { nullable: true })
  @Column("character varying", {
    nullable: true
  })
  posta_kodu: string | null;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true })
  userId: number;

  @Field(() => User, { nullable: true })
  @ManyToOne(
    () => User,
    (User: User) => User.cariler,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn()
  user: User | null;
}
