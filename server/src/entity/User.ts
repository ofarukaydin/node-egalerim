import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn
} from "typeorm";
import { Cariler } from "./Cariler";
import { Stoklar } from "./Stoklar";
import { UserProfile } from "./UserProfile";
import { ObjectType, Field, ID, Int } from "type-graphql";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn({
    type: "integer"
  })
  id: number;

  @Column("timestamp with time zone", {
    nullable: true
  })
  last_login: Date | null;

  @Field()
  @Column("character varying", {
    nullable: false,
    unique: true
  })
  email: string;

  @Column("boolean", {
    nullable: false
  })
  confirmed_email: boolean;

  @Column("character varying", {
    nullable: false
  })
  password: string;

  @Column("int", { default: 0 })
  tokenVersion: number;

  @Field(() => [Cariler])
  @OneToMany(
    () => Cariler,
    (Cariler: Cariler) => Cariler.user,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  cariler: Cariler[];

  @Field(() => [Stoklar])
  @OneToMany(
    () => Stoklar,
    (Stoklar: Stoklar) => Stoklar.user,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  stoklar: Stoklar[];

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true })
  profileId: number;

  @Field(() => UserProfile)
  @OneToOne(
    () => UserProfile,
    (UserProfile: UserProfile) => UserProfile.user,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn()
  profile: UserProfile | null;
}
