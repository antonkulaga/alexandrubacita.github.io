import React, {useEffect} from 'react'
import { Button, Icon, Image, Modal } from 'semantic-ui-react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link, useHistory
} from "react-router-dom"


export const Scene3D = () => {

    const history = useHistory();


    const onMenuClick = (page) => {
        return async () => {
            history.push("/"+page)
        }
    }

    useEffect(()=>{
        window.coreTeamClick = onMenuClick("team")
        window.autoimmuneClick = onMenuClick("immune")
        window.cleanMeatClick = onMenuClick("meat")
        window.lifeExtensionClick = onMenuClick("life-extension")

    },([]))

    return (
        <a-scene  gui-env renderer="colorManagement: true;" device-orientation-permission-ui="enabled: false">

            <a-assets>

                <a-asset-item id="celula" src="assets/models/celula/scene.gltf"></a-asset-item>
                <a-asset-item id="meat" src="assets/models/meat/scene.gltf"></a-asset-item>
                <a-asset-item id="antibodies_igg" src="assets/models/antibodies_ige/scene.gltf"></a-asset-item>
                <a-asset-item id="infinity_loop_perforated" src="assets/models/infinity_loop_perforated/scene.gltf"></a-asset-item>
                <a-asset-item id="floor" src="assets/models/floor.glb"></a-asset-item>
                <a-asset-item id="lab" src="assets/models/lab.glb"></a-asset-item>
                <a-asset-item id="sculp" src="assets/models/sculp.glb"></a-asset-item>
                <a-asset-item id="fabrik" src="assets/models/fabrik.glb"></a-asset-item>
                <img id="cellfabrik" src="assets/images/CellFabrik.png"></img>
                <img id="sky" src="assets/images/kiara.jpg"></img>

                

            </a-assets>
            <a-sky src="#sky"></a-sky>

            <a-gltf-model src="#floor" scale="0.1 0.1 0.1"  position="10 0 -12">

            </a-gltf-model>
            
            <a-gltf-model src="#lab" scale="0.1 0.1 0.1"  position="10 0 -12">

            </a-gltf-model>

            <a-gltf-model src="#sculp" scale="0.1 0.1 0.1"  position="10 0 -12">

            </a-gltf-model>
            
            <a-gltf-model src="#fabrik" scale="0.1 0.1 0.1"  position="10 -0.25 -12">

            </a-gltf-model>

            <a-gui-flex-container
                flex-direction="column" justify-content="center" align-items="normal" component-padding="0.1" opacity="0.6"
                width="4.3" height="1.9"
                panel-color="#07732B"
                panel-rounded="0.4"
                position="8.129 3.920 -9.81" rotation="0 90 0" scale="0.8 0.8 0.8"
            >
                <a-gui-button
                    width="4.1"
                    height="1"
                    base-depth="0.025"
                    depth="0.1"
                    gap="0.1"
                    onclick="autoimmuneClick"
                    value="Autoimmune gene therapy"
                    font-size="0.4"
                    margin="0.05 0.05 0.05 0.05"

                    font-color="white"
                    hover-color="green"
                    border-color="white"
                    background-color="green"
                    bevel="true"
                > </a-gui-button>

            </a-gui-flex-container>

           

            <a-gui-flex-container
                flex-direction="column" justify-content="center" align-items="normal" component-padding="0.1" opacity="0.6"
                width="4" height="1.5"
                panel-color="#07732B"
                panel-rounded="0.4"
                position="17.90 5 -26" rotation="0 0 0"
            >
                <a-gui-button
                    width="3"
                    height="0.7"
                    base-depth="0.025"
                    depth="0.1"
                    gap="0.1"
                    onclick="cleanMeatClick"
                    value="Artificial meat"
                    font-size="0.4"
                    margin="0.05 0.05 0.05 0.05"
                    font-color="white"
                    hover-color="green"
                    border-color="white"
                    background-color="green"
                > </a-gui-button>

            </a-gui-flex-container>

          

            <a-gui-flex-container
                flex-direction="column" justify-content="center" align-items="normal" component-padding="0.1" opacity="0.6"
                width="4" height="1.5"
                panel-color="#07732B"
                panel-rounded="0.4"
                position="10.93 7.899 -25.31" rotation="0 90 0"
            >
                <a-gui-button
                    width="3"
                    height="0.7"
                    base-depth="0.025"
                    depth="0.1"
                    gap="0.1"
                    onclick="coreTeamClick"
                    value="Core team"
                    font-size="0.4"
                    margin="0.05 0.05 0.05 0.05"
                    font-color="white"
                    hover-color="green"
                    border-color="white"
                    background-color="green"
                > </a-gui-button>
            </a-gui-flex-container>

            
            <a-gui-flex-container
                flex-direction="column" justify-content="center" align-items="normal" component-padding="0.1" opacity="0.6"
                width="4" height="1.5"
                panel-color="#07732B"
                panel-rounded="0.4"
                position="12.69 5.7 -5" rotation="0 90 0"
            >
                <a-gui-button
                    width="3"
                    height="0.7"
                    base-depth="0.025"
                    depth="0.1"
                    gap="0.1"
                    onclick="lifeExtensionClick"
                    value="Life extension"
                    font-size="0.4"
                    margin="0.05 0.05 0.05 0.05"
                    font-color="white"
                    hover-color="green"
                    border-color="white"
                    background-color="green"
                > </a-gui-button>
            </a-gui-flex-container>

            


            <a-entity id="mouseCursor" cursor="rayOrigin: mouse" raycaster="objects: [gui-interactable]"></a-entity>
            <a-entity id="leftHand" laser-controls="hand: left" raycaster="objects: [gui-interactable]"></a-entity>
            <a-entity id="rightHand" laser-controls="hand: right" raycaster="objects: [gui-interactable]"></a-entity>


            <a-entity id="cameraRig" position="35 2 -12" rotation="0 90 0">

                <a-camera  mouse-cursor="true"  look-controls="enabled:true; touchEnabled: true; mouseEnabled: true; pointerLockEnabled: false; hmdEnabled: true" wasd-controls="acceleration:50">


                </a-camera>
            </a-entity>

        </a-scene>

    )
}