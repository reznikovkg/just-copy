<template>
	<div :style="{height: '2000px;'}">
		<button @click="() => addNotification(settings[0])">Add</button>
		<button @click="() => addNotification(settings[1])">Big</button>
		<button @click="() => addNotification(settings[2])">Danger</button>
		<button @click="() => clearNotifications()">Clear</button>
		<NotificationShimkin/>
	</div>
</template>

<script>
import {  mapActions } from "vuex";
import NotificationShimkin from "../../../components/notificationShimkin/NotificationShimkin.vue";

export default {
	name: "NotificationPageShimkin",
	components: {
		NotificationShimkin,
	},
	data() {
		return {
			settings: [
				{
					title: "Simple Notification",
					content: "Some content",
					type: "info",
				},
				{
					title: "Big Notification",
					content: `Big test content just for fun..................`,
					type: "success",
					size: "big",
					delay: 3000,
				},
				{
					title: "Alert",
					content: "!!!!!!!!!!!!!!!!!!!!!",
					type: "danger",
				}
			]
		}
	},
	methods: {
		...mapActions("notificationShimkin", [
			"addNotification",
			"clearNotifications",
		]),
	},
}   
</script>
