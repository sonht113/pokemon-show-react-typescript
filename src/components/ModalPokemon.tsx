import React from "react";
import {PokemonDetail} from "../interface";

interface Props {
    name: string;
    image: string;
    abilities: PokemonDetail["abilities"];
    isOpenModal: boolean
}

const ModalPokemon:React.FC<Props> = (props) => {
    const {name, image, abilities, isOpenModal} = props
    return(
        <div className={isOpenModal ? "modal-open" : "modal-close"}>
            <section className="pokemon-list-container">
                <p className="pokemon-name">
                    {name}
                </p>
                <img src={image} alt={name} />
                <div className="detail-skill">
                    <p className="detail-ability">Abilities:</p>
                    {
                        abilities?.map((ab:any, index) => {
                            return (
                                <p key={index}>{ab.ability.name}</p>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default ModalPokemon