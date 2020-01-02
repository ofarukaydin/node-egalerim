import { Cariler } from "./../entity/Cariler";
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

@Resolver(() => Cariler)
export class CarilerResolver {
  @Query(() => [Cariler])
  @UseMiddleware(isAuth)
  async cariler(@Ctx() context: MyContext) {
    return Cariler.find({
      where: { userId: context.payload!.userId }
    });
  }

  @Query(() => Cariler)
  @UseMiddleware(isAuth)
  async cari(@Ctx() context: MyContext, @Arg("id") id: number) {
    const cari = await Cariler.findOne(id);
    if (cari!.userId === Number(context.payload!.userId)) {
      return cari;
    } else {
      throw new Error("Bir hata oluştu.");
    }
  }

  @Mutation(() => Cariler)
  @UseMiddleware(isAuth)
  async cariekle(
    @Ctx() context: MyContext,
    @Arg("isim") isim: string,
    @Arg("tcNo") tc_no: string,
    @Arg("vergiNo", { nullable: true }) vergi_no: string,
    @Arg("email", { nullable: true }) email: string,
    @Arg("telNo", { nullable: true }) tel_no: string,
    @Arg("adres", { nullable: true }) adres: string,
    @Arg("postaKodu", { nullable: true }) posta_kodu: string
  ) {
    try {
      const cari = new Cariler();
      cari.email = email;
      cari.isim = isim;
      cari.adres = adres;
      cari.posta_kodu = posta_kodu;
      cari.tc_no = tc_no;
      cari.vergi_no = vergi_no;
      cari.tel_no = tel_no;
      cari.userId = Number(context.payload!.userId);
      await Cariler.save(cari);
      return cari;
    } catch (err) {
      throw new Error("err");
    }
  }

  @UseMiddleware(isAuth)
  @FieldResolver(() => User)
  async user(@Ctx() context: MyContext) {
    return await User.findOne(context.payload!.userId);
  }
}
