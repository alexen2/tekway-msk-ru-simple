const tabs = () => {
	const tabsList = document.querySelectorAll('.tabs');

	tabsList.forEach(tab => {
		tab.addEventListener('click', function (e) {
			const tabsId = tab.id;
			const currentId = e.target.dataset.id;
			const currentTabsBody = document.querySelector(`#${tabsId}-body`);
			const tabsButtons = tab.querySelectorAll('.tabs__item');

			if (currentTabsBody) {
				tabsButtons.forEach(item => {
					item.classList.remove('tabs__item--active');
				});

				e.target.classList.add('tabs__item--active');

				const tabsBodyItems = currentTabsBody.querySelectorAll('.tabs-body__items');

				tabsBodyItems.forEach(item => {
					item.classList.add('hidden');
				});

				document.getElementById(currentId).classList.remove('hidden');
			}
		})
	})
};

export default tabs;