const router = new Router();
//const dogModel = new DogModel();
const cafeController = new CafeController();
//const dogView = new DogView();

const pages = {
	"home": {
		template: "../app/templates/home.html",
		controller: cafeController
	},
	"sobreNosotros": {
		template: "../app/templates/sobreNosotros.html"
	}
}

router.init(pages);
router.defaultPage(pages["home"]);