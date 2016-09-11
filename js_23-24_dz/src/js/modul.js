// define(
// 	'modul',
// 	['jquery'],
	function Modul(){
	
			var self = this;
			self.data = ['learn javascript', 'lerarn html', 'make coffe'];

			self.addItem = function (item) {
				if (item.length === 0) {
					return;
				}

				self.data.push(item);

				return self.data;
			};


			self.removeItem = function (item) {
				var index = self.data.indexOf(item);

				if (index == -1) {
					return;
				}
				self.data.splice(index, 1);

				return self.data;
			};


			// return self.data;

		
	}
	// );