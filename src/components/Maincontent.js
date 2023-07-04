import Hero from "./Hero";
import Cardjurusan from "./Cardjurusan";
import jogja from "./../assets/jogja_selfie.jpg"
import jatuhkramik from "./../assets/jatuhkramik.jpg"
import ulangan from "./../assets/ulangan.jpg"

const Maincontent = ()=> {
    return (
        <div>
            <Hero />
            <div className="container">
            <div className="row">
                <div className="col-12 text-center my-5">
                    <h1>Kegiatan</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4  col-12">
                        <Cardjurusan image={jogja} kegiatan="Candi Prambanan" description="Selfi di depan candi prambanan."/>
                </div>
                <div className="col-lg-4  col-12">
                        <Cardjurusan image={jatuhkramik} kegiatan="Jatuhkramik" description="Proses pernikahan dengan menggunakan adat jawa."/>
                </div>
                <div className="col-lg-4  col-12">
                        <Cardjurusan image={ulangan} kegiatan="PAS" description="Kegiatan saat sedang Penilaian Akhir Semester 2." />
                </div>
            </div>
            </div>
        </div>
        
    )
}

export default Maincontent;