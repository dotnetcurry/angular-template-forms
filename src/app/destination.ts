export default class Destination {
     constructor(
        public name: string,
        public country: string,
        public timezone: string,
        public distanceFromCapital?: number,
        public language?: string
        ){

        } 
}
