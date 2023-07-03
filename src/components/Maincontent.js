import Hero from "./Hero";
import Cardjurusan from "./Cardjurusan";
import jogja from "./../assets/jogja_selfie.jpg"

const Maincontent = ()=> {
    return (
        <div>
            <Hero />
            <div className="container">
            <div className="row">
                <div className="col-12 text-center my-5">
                    <h1>Jurusan Sekolah</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4  col-12">
                        <Cardjurusan image={jogja} />
                </div>
                <div className="col-lg-4  col-12">
                        <Cardjurusan image={jogja} />
                </div>
                <div className="col-lg-4  col-12">
                        <Cardjurusan image={jogja} />
                </div>
            </div>
            </div>
        </div>
        
    )
}

export default Maincontent;