

//-- Model ---
import UserNew from "../../models/UserNew.js"

export default {

    Query: {

        async getUserById(root, { id }, { req, res }) {
            try {
              const res_data = await UserNew.findOne({
                //logging: printLogConsole,
                raw: true,
                nest: true,
                where: {
                  id: id,
                },
              })
              return res_data
            } catch (e) {
              throw new ErrorApp(e, e.status)
            }
          },
        
    }
}