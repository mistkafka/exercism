class SpaceAge {
    constructor(seconds) {
        this.seconds = seconds;
        this.registerPlaentAgeFn();

    }

    registerPlaentAgeFn() {
        Object.keys(SpaceAge.Scale2EarthMapping)
            .forEach(planetName => {
                let fnName = 'on' + planetName;
                this[fnName] = () => {
                    let earthAge = this.earthAge;
                    let scale = SpaceAge.Scale2EarthMapping[planetName];
                    let planetAge = earthAge / scale;
                    planetAge = Number.parseFloat(planetAge.toFixed(2, 10));

                    return planetAge;
                };
            });
    }

    get earthAge() {
        return this.seconds / SpaceAge.SECONDS_OF_EARTH_YEAR;
    }    
}

SpaceAge.Scale2EarthMapping = {
    Earth: 1,
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Mars: 1.8808158,
    Jupiter: 11.862615,
    Saturn: 29.447498,
    Uranus: 84.016846,
    Neptune: 164.79132,
};

SpaceAge.SECONDS_OF_EARTH_YEAR = 31557600;

module.exports = SpaceAge;
