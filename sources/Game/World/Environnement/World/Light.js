import * as THREE from 'three'

import Game from '../../../Game.js'

export default class Light
{
    constructor()
    {
        this.game = new Game()
        this.scene = this.game.scene
        this.resources = this.game.resources
        this.debug = this.game.debug
        
        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('Light')
        }

        // this.setSunLight()
           this.setAmbientLight()
    }
    
    setAmbientLight()
    {
        /**
         * Ambient Light
        */
        this.ambiantLight = new THREE.AmbientLight( 0xFFFFFF, 1.6)
        // const ambiantLight = new THREE.AmbientLight(0x111111, 0.2)
        this.scene.add(this.ambiantLight)
    }
}