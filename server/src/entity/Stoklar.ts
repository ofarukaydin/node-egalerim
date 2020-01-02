import { ObjectType, Field, ID, Int } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { User } from "./User";
import { RuhsatResimleri } from "./RuhsatResimleri";
import { AracResimleri } from "./AracResimleri";

@ObjectType()
@Entity()
export class Stoklar extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn({
    type: "integer",
    name: "id"
  })
  id: number;

  @Field()
  @Column("character varying", {
    nullable: false,
    name: "plaka"
  })
  plaka: string;

  @Field(() => String, { nullable: true })
  @Column("character varying", {
    nullable: true,
    name: "marka"
  })
  marka: string | null;

  @Field(() => String, { nullable: true })
  @Column("character varying", {
    nullable: true,
    name: "model"
  })
  model: string | null;

  @Field(() => String, { nullable: true })
  @Column("character varying", {
    nullable: true,
    name: "yil"
  })
  yil: string | null;

  @Field(() => String, { nullable: true })
  @Column("character varying", {
    nullable: true,
    name: "ruhsat_no"
  })
  ruhsat_no: string | null;

  @Field(() => String, { nullable: true })
  @Column("date", {
    nullable: true,
    name: "alis_tarihi"
  })
  alis_tarihi: string | null;

  @Field(() => String, { nullable: true })
  @Column("character varying", {
    nullable: true,
    name: "motor_no"
  })
  motor_no: string | null;

  @Field(() => String, { nullable: true })
  @Column("character varying", {
    nullable: true,
    name: "sase_no"
  })
  sase_no: string | null;

  @Field(() => String, { nullable: true })
  @Column("character varying", {
    nullable: true,
    name: "alis_fiyati"
  })
  alis_fiyati: string | null;

  @Field(() => String, { nullable: true })
  @Column("character varying", {
    nullable: true,
    name: "kdv"
  })
  kdv: string | null;

  @Field(() => String, { nullable: true })
  @Column("character varying", {
    nullable: true,
    name: "toplam"
  })
  toplam: string | null;

  @Field(() => User, { nullable: true })
  @ManyToOne(
    () => User,
    (User: User) => User.stoklar,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn()
  user: User | null;

  @Field(() => String, { nullable: true })
  @Column("text", {
    nullable: true,
    name: "aciklama"
  })
  aciklama: string | null;

  @Field(() => String, { nullable: true })
  @Column("character varying", {
    nullable: true,
    name: "tur"
  })
  tur: string | null;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true })
  userId: number;

  @Field(() => [AracResimleri])
  @OneToMany(
    () => AracResimleri,
    (AracResimleri: AracResimleri) => AracResimleri.stoklar,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  arac_resimleri: AracResimleri[];

  @Field(() => [RuhsatResimleri])
  @OneToMany(
    () => RuhsatResimleri,
    (RuhsatResimleri: RuhsatResimleri) => RuhsatResimleri.stoklar,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  ruhsat_resimleri: RuhsatResimleri[];
}
