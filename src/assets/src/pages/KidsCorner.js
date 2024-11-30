import homeImages from "../assets/components/HomeImages";
import { useState } from "react";
import ItemsFooter from "../assets/components/ItemsFooter";
import PageTransions from "../assets/components/PageTransions";
const KidsCorner = () => {
  const [kidsCornerGam] = useState([
    {
      gameName: "Spaceship Maze",
      gameTitle: `Help the spaceship through the maze to get back to earth. Move through levels with increasing difficulty; each puzzle starts the ship in a different location.`,
      gameTitle2nd: ` Develop kids’ skills in strategizing, spatial awareness, hand-eye coordination, problem solving and more! Free to play, priceless for learning.`,
      gameImage: require("../assets/images/Rectangle 382.png"),
      gameButtonTitle: "PLAY GAME",
      id: 1,
    },
    {
      gameName: "Risky Way",
      gameTitle: `Risky Way is a free instant game. The highways of the future are risky and if you want to survive you'll need to be smarter than all of them combined. All you have to do in this nerve-tingling 
            racing game is click, hold, and let go. Of course, if you want to be an effective driver who is able to survive you'll have to know when to click, how long to hold, and only let go at the appropriate time.`,
      gameImage: require("../assets/images/Group 7.png"),
      gameButtonTitle: "PLAY GAME",
      id: 2,
    },
    {
      gameName: "Pacman",
      gameTitle: `There's nothing like a little old school Pacman game right? The great arcade game Pac Man was ported to the NES in 1988 and you can play it right here. Never played before?! 
            What?! Eat all the pellets to complete a stage while trying to score as many points as possible by eating fruit and ghosts along the way! But there's more! Ever wonder how Pacman got started? Check out the history of Pacman below and see how it all began.`,
      gameImage: require("../assets/images/kisspng-pac-man-championship-edition-super-smash-bros-for-pac-man-5ac7fd0f47b9191484751415230558872938-u1U_ZbU1J-transformed 1.png"),
      gameButtonTitle: "PLAY GAME",
      id: 3,
    },
  ]);
  return (
    <>
      <PageTransions>
        <section>
          <div className="kidsBanner">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-md-6 col-lg-12 col-xl-6 col-xxl-6  kidsItem">
                  <img
                    src={require("../assets/images/Group 5.png")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-12 col-xl-6 col-xxl-6  kidsItem2">
                  <img
                    src={require("../assets/images/Group 15.png")}
                    alt=""
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="games container-fluid">
            {kidsCornerGam.map((game) => (
              <div className=" gameBackground ">
                <div
                  className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                  key={game.id}>
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 gameItem">
                        <h2>{game.gameName}</h2>
                        <p>{game.gameTitle}</p>
                        <p>{game.gameTitle2nd}</p>
                        <button className="btn">{game.gameButtonTitle}</button>
                      </div>
                      <div className="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 gameItem">
                        <img
                          src={game.gameImage}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <ItemsFooter />
        </section>
      </PageTransions>
    </>
  );
};

export default KidsCorner;
