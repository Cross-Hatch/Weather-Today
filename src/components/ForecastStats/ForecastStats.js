import { Container, ItemContainer } from "./ForecastStats.styles";

const ForecastStats = () => {
    return ( 
        <Container>
            <ItemContainer>
                <div>Humidity</div>
                <div>100%</div>
            </ItemContainer>
            <ItemContainer>
                <div>Pressure</div>
                <div>2232</div>
            </ItemContainer>
            <ItemContainer>
                <div>Wind Speed</div>
                <div>54m/s</div>
            </ItemContainer>
            <ItemContainer>
                <div>Sunrise</div>
                <div>6:00pm</div>
            </ItemContainer>
            <ItemContainer>
                <div>Sunset</div>
                <div>7:00am</div>
            </ItemContainer>
        </Container>
     );
}
 
export default ForecastStats;