CREATE TABLE `posts` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(100),
	`content` text,
	`created_at` timestamp,
	`updated_at` timestamp,
	CONSTRAINT `posts_id` PRIMARY KEY(`id`)
);
