
module.exports = ({ express }) => {

    const rootRouter = express.Router();

    const viewRouter = require('./view/route.view')({ express });
    rootRouter.use('/', viewRouter);

    return rootRouter;
};