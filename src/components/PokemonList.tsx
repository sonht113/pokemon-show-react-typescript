import React, {useState} from "react";
import "./pokemon.css"
import ModalPokemon from "./ModalPokemon";

interface Props {
    name: string;
    id: number;
    image: string;
    abilities: {
        name: string;
        ability: {
            name: string;
            url: string;
        };
    }[] | undefined;
}


const PokemonList:React.FC<Props> = (props) => {
    const {name, id, image, abilities} = props
    const [nameSelected, setNameSelected] = useState<string>("")
    const [imageSelected, setImageSelected] = useState<string>("null")
    const [abilitiesSelected, setAbilitiesSelected] = useState<Props["abilities"]>([])
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

    const handleSelectedPokemon = (name: string, image: string, abilities: Props["abilities"]) => {
        setNameSelected(name)
        setImageSelected(image)
        setAbilitiesSelected(abilities)
        setIsOpenModal(!isOpenModal)
    }

    const handleCloseModal = () => {
        setIsOpenModal(!isOpenModal)
    }

    return (
        <div className="" style={{position: "relative"}}>
            <div className={isOpenModal ? "bg-modal__open" : "bg-modal__close"}>
                <div className="close" onClick={handleCloseModal}>
                    <p style={{
                        fontSize: "2em",
                        color: "white",
                        position: "absolute",
                        top: 0,
                        right: 50,
                        cursor: "pointer"}}>X</p>
                </div>
                <ModalPokemon
                    name={nameSelected}
                    image={imageSelected}
                    abilities={abilitiesSelected}
                    isOpenModal={isOpenModal}/>
            </div>
            <section className="pokemon-list-container" onClick={() => handleSelectedPokemon(name, image, abilities)}>
                <p className="pokemon-name">
                    {name}
                </p>
                <img src={image} alt={name} />
            </section>
        </div>
    )
}

export default PokemonList