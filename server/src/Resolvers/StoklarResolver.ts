import { Stoklar } from "./../entity/Stoklar";
import {
  Resolver,
  Query,
  Mutation,
  Ctx,
  UseMiddleware,
  Arg,
  FieldResolver
} from "type-graphql";

import { User } from "../entity/User";
import { MyContext } from "../MyContext";
import { isAuth } from "../Auth/isAuth";

@Resolver(() => Stoklar)
export class StoklarResolver {
  @Query(() => [Stoklar])
  @UseMiddleware(isAuth)
  async stoklar(@Ctx() context: MyContext) {
    return Stoklar.find({
      where: { userId: context.payload!.userId }
    });
  }

  @Query(() => Stoklar)
  @UseMiddleware(isAuth)
  async stok(@Ctx() context: MyContext, @Arg("id") id: number) {
    const stok = await Stoklar.findOne(id);
    if (stok!.userId === Number(context.payload!.userId)) {
      return stok;
    } else {
      throw new Error("Bir hata oluştu.");
    }
  }

  @Mutation(() => Stoklar)
  @UseMiddleware(isAuth)
  async stokekle(
    @Ctx() context: MyContext,
    @Arg("plaka") plaka: string,
    @Arg("marka", { nullable: true }) marka: string,
    @Arg("model", { nullable: true }) model: string,
    @Arg("yil", { nullable: true }) yil: string,
    @Arg("ruhsatNo", { nullable: true }) ruhsat_no: string,
    @Arg("alisTarihi", { nullable: true }) alis_tarihi: string,
    @Arg("motorNo", { nullable: true }) motor_no: string,
    @Arg("saseNo", { nullable: true }) sase_no: string,
    @Arg("alisFiyati", { nullable: true }) alis_fiyati: string,
    @Arg("kdv", { nullable: true }) kdv: string,
    @Arg("toplam", { nullable: true }) toplam: string,
    @Arg("aciklama", { nullable: true }) aciklama: string,
    @Arg("tur", { nullable: true }) tur: string
  ) {
    try {
      const stok = new Stoklar();
      stok.plaka = plaka;
      stok.marka = marka;
      stok.model = model;
      stok.yil = yil;
      stok.ruhsat_no = ruhsat_no;
      stok.alis_tarihi = alis_tarihi;
      stok.motor_no = motor_no;
      stok.sase_no = sase_no;
      stok.alis_fiyati = alis_fiyati;
      stok.kdv = kdv;
      stok.toplam = toplam;
      stok.aciklama = aciklama;
      stok.tur = tur;
      stok.userId = Number(context.payload!.userId);

      await Stoklar.save(stok);
      return stok;
    } catch (err) {
      throw new Error(err);
    }
  }

  @UseMiddleware(isAuth)
  @FieldResolver(() => User)
  async user(@Ctx() context: MyContext) {
    return await User.findOne(context.payload!.userId);
  }
}
