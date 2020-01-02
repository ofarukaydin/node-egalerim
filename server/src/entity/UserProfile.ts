import { ID, Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class UserProfile extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn({
    type: "integer"
  })
  id: number;

  @Field(() => String, { nullable: true })
  @Column("character varying", {
    nullable: true
  })
  name: string | null;

  @Field(() => String, { nullable: true })
  @Column("character varying", {
    nullable: true
  })
  company: string | null;

  @Field(() => String, { nullable: true })
  @Column("character varying", {
    nullable: true
  })
  tc_no: string | null;

  @Field(() => String, { nullable: true })
  @Column("character varying", {
    nullable: true
  })
  phone: string | null;

  @Field(() => User, { nullable: true })
  @OneToOne(
    () => User,
    (User: User) => User.profile,
    { nullable: false, onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  user: User | null;
}
