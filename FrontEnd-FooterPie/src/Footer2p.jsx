import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Footer2p.css'
import './index.css'
function Footer2() {
    return (
        <footer className='footer-top'>
            <div className="container">
                {/* Parte Inferior */}
                <div className=" d-flex justify-content-between align-items-center">
                    {/* Redes Sociales */}
                    <div>
                        <span className='footer-span'>Síguenos en: </span>
                        <a href="https://www.facebook.com" className="text-light me-2">
                            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ3kccZ7RZgXm69K1Z8YyLeiSusF46845q9dvB6F95rrucZSY6U" alt="Facebook" style={{ width: "50px", height: "50px" }} />
                        </a>
                        <a href="https://twitter.com" className="text-light me-2">
                            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQBZfECrZYS6R8QExFwKDYSzqWUBPdygLg4JIjCFxwFQAZd2z3R" alt="Twitter" style={{ width: "50px", height: "50px" }} />
                        </a>
                        <a href="https://www.youtube.com" className="text-light me-2">
                            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3VMcPg9981V_6becJz44xxWwEysykddM_w80yg5PaIttQ3ckP" alt="YouTube" style={{ width: "50px", height: "50px" }} />
                        </a>
                        <a href="https://www.instagram.com" className="text-light">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjXjZ-E4L7LhLsTL3lfksqQ75V15UVxTcBp9qco5Ap7HzR0ykx" alt="Instagram" style={{ width: "50px", height: "50px" }} />
                        </a>
                    </div>
                    {/* Descarga App */}
                    <div>
                        <span className='footer-span'>Descarga la app: </span>
                        <a href="#" className="text-light me-2">
                            <img src="https://png.pngtree.com/element_our/md/20180301/md_5a98274408dd7.jpg" alt="PlayStore" style={{ width: "60px", height: "60px" }} />
                        </a>
                        <a href="#" className="text-light">
                            <img src="https://w7.pngwing.com/pngs/566/77/png-transparent-apple-logo-apple-watch-logo-apple-logo-heart-logo-computer-wallpaper-thumbnail.png" alt="Apple" style={{ width: "50px", height: "50px" }} />
                        </a>
                    </div>
                    {/* Libro de Reclamaciones */}
                    <a href="/libro-reclamaciones" className="">
                    <img src="https://compudiskett.com.pe/reclamaciones/img/libro.png" alt="PlayStore" style={{ width: "45px", height: "45px" }} />
                    Libro de Reclamaciones</a>
                </div>
            </div>
        </footer>
    );
}
export default Footer2;