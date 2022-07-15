function App(){
    this.departmentList = [];
    this.init = function(){
        let setupbutton = document.getElementById("setuptile");
        setupbutton.onclick = function(){
            app.setuptile();
            let sidecontainer = document.getElementById("sidecontainer");
            sidecontainer.style.display = "none";
        }
    }
    this.setuptile = function(){
        const tilesToRemove = {
            '2': 16,
            '3': 8,
            '4': 4
        };
        let playernumber = document.getElementById("playernumber").value;

        for( let i = 0; i < tileList.length; i++){
            this.departmentList.push(new Department(tileList[i].name, tileList[i].type, tileList[i].x, tileList[i].y, tileList[i].positionY, tileList[i].position));
            this.departmentList.push(new Department(tileList[i].name, tileList[i].type, tileList[i].x, tileList[i].y, tileList[i].positionY, tileList[i].position));
        }

        let totalTiles = this.departmentList.length;
        for(let i = 0; i < tilesToRemove[playernumber]; i++){
            let indexToBeRemoved = Math.floor(Math.random() * totalTiles);
            this.departmentList.splice(indexToBeRemoved, 1);
            totalTiles--;
        }

        let tileDivContainer = document.getElementById("tiles");
        let tileContainer = [];
        for(let i = 0; i < 16; i++){
            tileContainer.push(this.createTileContainer(i));
            tileDivContainer.appendChild(tileContainer[i]);
        }

        for(let i = 0; i < this.departmentList.length; i++){
            let totalTilesInContainer = tileContainer[this.departmentList[i].position].childElementCount;

            let tile = this.createTile(this.departmentList[i].x, this.departmentList[i].y, this.departmentList[i].positionY, totalTilesInContainer);
            tileContainer[this.departmentList[i].position].appendChild(tile);
        }
    }
    this.createTile = function(x, y, positionY, tileCount){
        let tile = document.createElement("div");
        tile.className = "tile";
        tile.style.left = ((x * -1) + (tileCount * -4))+ "px";
        tile.style.top = (positionY + (tileCount * -8))+ "px";
        tile.style.backgroundPositionX = x + "px";
        tile.style.backgroundPositionY = y + "px";

        return tile;
    }

    this.createTileContainer = function(id){
        let tileContainer = document.createElement("div");
        tileContainer.id = "tile-container"+id;
        tileContainer.className = "tile-container";

        return tileContainer;
    }
}

function Department(name, type, x, y, positionY, position){
    this.name = name;
    this.type = type;
    this.x = x;
    this.y = y;
    this.positionY = positionY;
    this.position = position;
}

let app = new App();