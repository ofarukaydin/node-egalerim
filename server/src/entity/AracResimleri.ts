import { ObjectType, Field, ID, Int } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { Stoklar } from "./Stoklar";

@ObjectType()
@Entity()
export class AracResimleri extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn({
    type: "integer"
  })
  id: number;

  @Field()
  @Column("character varying", {
    nullable: false
  })
  image: string;

  @Field(() => Stoklar, { nullable: true })
  @ManyToOne(
    () => Stoklar,
    (Stoklar: Stoklar) => Stoklar.arac_resimleri,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn()
  stoklar: Stoklar | null;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true })
  stoklarId: number;
}
