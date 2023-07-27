import { RecipeInfo } from "./RecipeInfo"
import { HiOutlineChartBar, HiOutlineChartPie } from 'react-icons/hi';
import { BsAlarm } from 'react-icons/bs';

export const Recipe = ({ name,time, image, servings, calories }) => {
    return (
        <>
            <h2> { name } </h2>
            <img src={image} alt={name} width="450" />
            <ul>
                <RecipeInfo text={`${time} min`} icon={BsAlarm} />
                <RecipeInfo text={`${servings} servings`} icon={HiOutlineChartPie} />
                <RecipeInfo text={`${calories} calories`} icon={HiOutlineChartBar} />
            </ul>
        </>
    )
}