# roll and play dice game


# https://roll-and-play.herokuapp.com/
the server shutdown every half hour so on opening first time might take some time


# to setup 

1 - git clone https://github.com/knayamlohani/rollandplay.git <br/>
2 - git checkout master<br/>
3 - git pull origin master<br/>
4 - npm install<br/>
5 - npm start<br/>
6 - open url -  http://localhost:5000/ <br/>

# To run unit test <br/>

1 - npm test<br/><br/>
 



# services - <br/>

# redux.actionCreator.game.js - <br/>
1 - handlDiceRoleAction (entry point for dice roll)<br/>
2 - determineAndSetPlayerOrdering<br/><br/>


# service.pointsHandling.js<br/>
1 - handleCurrentPlayerWonCase<br/>
2 - handleCurrentPlayerGetsAnExtraChanceCase<br/>
3 - handleRestDiceRollCase<br/>
4 - handleCaseWhereNexInLineIsPenalized<br/>
5-  updateCurrentRanksBasedOnDiceRoll<br/>


# service.game.js<br/>
1 - generateDiceNo<br/>
2 - shuffle<br/>
