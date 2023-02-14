import Game from '../Game.js'

import Ground from './Environnement/World/Ground.js'
import Light from './Environnement/World/Light.js'
import Sky from './Environnement/World/Sky.js'


export default class World
{
    constructor()
    {
        this.game = new Game()
        this.scene = this.game.scene
        this.resources = this.game.resources

        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup
            this.ground = new Ground()
            this.light = new Light()
            this.sky = new Sky()
            // this.fox = new Fox()
            // this.environment = new Environment()
        })
    }

    update()
    {
        // if(this.fox)
        //     this.fox.update()
    }
}