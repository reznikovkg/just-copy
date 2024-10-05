<template>
	<div>
		<RadialMenu :items="menuItems" />
	</div>
</template>

<script>
import RadialMenu from "../../../components/radialMenu/RadialMenu.vue";

export default {
	components: {
		RadialMenu,
	},
	data() {
		return {
			menuItems: [
				{
					icon: "https://cdn.icon-icons.com/icons2/3824/PNG/512/statistics_growth_business_analytics_diagram_icon_233861.png",
					color: "rgb(255, 232, 165)",
					name: "Item 1",
					callback: () => {
						alert("Item 1 clicked!");
					},
				},
				{
					icon: "https://cdn.icon-icons.com/icons2/3824/PNG/512/fox_web_fire_website_webpage_browser_icon_233852.png",
					color: "#ff7741",
					name: "Item 2",
					callback: () => {
						alert("Item 2 clicked!");
					},
				},
				{
					icon: "https://cdn.icon-icons.com/icons2/3824/PNG/512/play_market_shopping_player_store_icon_233841.png",
					color: "#7f74ff",
					name: "Item 3",
					callback: () => {
						alert("Item 3 clicked!");
					},
				},
				{
					icon: "https://cdn.icon-icons.com/icons2/3824/PNG/512/seo_app_browser_allo_internet_web_icon_233847.png",
					color: "#4fe6ff",
					name: "Item 4",
					callback: () => {
						alert("Item 4 clicked!");
					},
				},
				{
					icon: "https://cdn.icon-icons.com/icons2/3824/PNG/512/team_users_communication_person_group_on_icon_233863.png",
					color: "#59ff59",
					name: "Item 5",
					callback: () => {
						alert("Item 5 clicked!");
					},
				},
				{
					icon: "https://cdn.icon-icons.com/icons2/3824/PNG/512/apps_application_app_smartphone_drupal_icon_233840.png",
					color: "#849eec",
					name: "Item 6",
					callback: () => {
						alert("Item 6 clicked!");
					},
				},
				{
					icon: "https://cdn.icon-icons.com/icons2/3824/PNG/512/brand_yelp_internet_network_icon_233865.png",
					color: "#ff9f9f",
					name: "Item 7",
					callback: () => {
						alert("Item 7 clicked!");
					},
				},
			],
		};
	},
};
</script>
