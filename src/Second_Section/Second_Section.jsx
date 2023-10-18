import React, { useState } from 'react';
import './Second_Section.css';
import firstimg from "../imges/firstimg.jpg"
import secondimg from "../imges/secondimg.jpg"
import thirdimg from "../imges/thirdimg.jpg"
import fourthimg from "../imges/fourthimg.jpg"
import zakovatimg from "../imges/zakovatimg.jpg"

const Second_Section = () => {

    return (
        <div id="demo" class="carousel-fade slide slider " data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={firstimg} alt="Los Angeles" class="d-block w-10 m-auto image" />
                    <div class="carousel-caption">
                        <h3>Karte Turniri</h3>
                        <p>Maktabimizning faol va qoni qaynoq o'quvchilari Karate bo'yicha <br /> Respublika va jahon chempionatlarida faxrli o'rinlarni egallaganlar</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={zakovatimg} alt="Chicago" class="d-block w-100 m-auto image" />
                    <div class="carousel-caption">
                        <h3>Zakovat turniri</h3>
                        <p>Maktabimiz o'quvchilari nafaqat sport bo'yicha balki bilim bo'yicha ham ustun turishadi. Ushbu rasmda ular Zakovat turnirida qatnashayotganlarini ko'rishingiz mumkin</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={secondimg} alt="Chicago" class="d-block w-100 m-auto image" />
                    <div class="carousel-caption">
                        <h3>Taqdirlash marosimi</h3>
                        <p>Zakovat turnirida faxrli o'rin olgan o'quvchilarimizni taqdirlashmoqda</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={fourthimg} alt="New York" class="d-block w-100 m-auto image" />
                    <div class="carousel-caption">
                        <h3>Taqdirlash marosimi</h3>
                        <p>Bu esa Zakovat turnirida g'alaba qozongan o'quvchilarning yana biri</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={thirdimg} alt="New York" class="d-block w-100 m-auto image" />
                    <div class="carousel-caption">
                        <h3>Yoshlarga e'tibor</h3>
                        <p>Ko'rib turganingizdek bizning maktbda nafaqat katta sinf o'quvchilari balki kichik sinf o'quvchilari ham faol va juda bilimli ushbu rasmda ular boshqa maktablar bilan o'tkazilgan "Sog' tanda sog'lom aql" musobaqasida faxrli o'rinlarni</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Second_Section;