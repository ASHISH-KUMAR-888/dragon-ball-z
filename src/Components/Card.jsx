import { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    axios
      .get("https://dragonball-api.com/api/characters?limit=58")
      .then((r) => setData(r.data.items))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  const aura = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <>
      <div className="mt-[30px] mb-[55px] px-[20px] grid gap-y-[50px] md:mt-[60px] md:mb-[80px] md:grid-cols-2 gap-[30px] lg:grid-cols-3">
        {data.map((item) => {
          return (
            <>
              <div className="h-max" key={item.id}>
                <div className="h-[65%] flex justify-center items-center tick">
                  <img
                    className={`h-full imu hover:drop-shadow-[1px_1px_5px_red]`}
                    style={{ filter: `drop-shadow(1px 1px 10px ${aura()})` }}
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="h-[35%] flex flex-col justify-between gap-y-[5px] relative h-max">
                  <div className="absolute h-full w-full bg-[#3C3E44] z-[-2]"></div>

                  <div className="stack pt-[10px] md:mt-[20px]">
                    <p className="text-white font-black tracking-[1px] text-[7vw] md:text-[2vw]">
                      {item.name}
                    </p>
                    <p className="text-[#FBC02D] font-[600] fontu">
                      {item.race} - {item.gender}
                    </p>
                  </div>

                  <div className="stack">
                    <p className="text-[#F5F5F5] font-[600] fontu">Base KI:</p>
                    <p className="text-[#FBC02D] font-[600] fontu">{item.ki}</p>
                  </div>

                  <div className="stack">
                    <p className="text-[#F5F5F5] font-[600] fontu">Total KI:</p>
                    <p className="text-[#FBC02D] font-[600] fontu">
                      {item.maxKi}
                    </p>
                  </div>

                  <div className="stack pb-[10px] md:mb-[20px]">
                    <p className="text-[#F5F5F5] font-[600] fontu">
                      Afilliation:
                    </p>
                    <p className="text-[#FBC02D] font-[600] fontu">
                      {item.affiliation}
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Card;
