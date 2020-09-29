class Controller{
  constructor () {
    getAll (req,res, tabla) {
      try {
        const resultado = await tabla.findAll();
        res.json({
          data: resultado,
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
}

export default Controller;
