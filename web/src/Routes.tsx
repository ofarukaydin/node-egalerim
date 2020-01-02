import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";
import Home from "./components/Home";
import CariEkle from "./components/CariEkle";
import StokEkle from "./components/StokEkle";
import Profil from "./components/Profil";
import CariListele from "./components/CariListele";
import CariDetay from "./components/CariDetay";
import ProfilDetay from "./components/ProfilDetay";
import StokListele from "./components/StokListele";
import StokDetay from "./components/StokDetay";
import StokHareketleri from "./components/StokHareketleri";

const BaseRouter = () => (
  <Hoc>
    <Route path="/stokekle" component={StokEkle} />
    <Route path="/cariekle" component={CariEkle} />
    <Route path="/profil" component={ProfilDetay} />
    <Route path="/stokhareketleri" component={StokHareketleri} />
    <Route exact path="/stokliste" component={StokListele} />
    <Route exact path="/stokliste/:id" component={StokDetay} />
    <Route exact path="/cariliste" component={CariListele} />
    <Route exact path="/cariliste/:id" component={CariDetay} />
    <Route path="/profil/:id" component={Profil} />
    <Route exact path="/" component={Home} />
  </Hoc>
);

export default BaseRouter;
