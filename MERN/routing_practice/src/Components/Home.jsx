import { useParams } from "react-router-dom";

const Home = (props) => {
    const { item, color, backgroundColor } = useParams();
    const isnum = isNaN(+item) ? "word" : "number"
    return <h1 style={{ color: color, backgroundColor: backgroundColor }}>The {isnum} is: {item}</h1>
}

export default Home;