--
-- PostgreSQL database dump
--

-- Dumped from database version 13.16 (Debian 13.16-1.pgdg120+1)
-- Dumped by pg_dump version 13.16 (Debian 13.16-1.pgdg120+1)

INSERT INTO public."User" (id, email, password) VALUES ('6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 'example@email.com', '$2b$10$SFwTxmr4B289MMK0gdkI6eMdeJEv/Q/0TwwviL8TcWnxc5c3xoOG2');
INSERT INTO public."User" (id, email, password) VALUES ('1c342bdc-f73a-4d8e-9daa-242d70dea688', 'example2@email.com', '$2b$10$kgvhcBTpn.iYSLti8tz/2u6/Lq3ttWUC5CWOrM/A9/J1SaD.YcjDK');


--
-- Data for Name: Calculation; Type: TABLE DATA; Schema: public; Owner: user
--

INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('c8a36be1-03b6-455f-9147-ab82c1fd5d0f', '2024-09-02 03:08:28.859', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 6, 6, 36, '*');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('db66e0c0-15a8-4755-bad1-42b9a52f99c6', '2024-09-02 03:08:34.213', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 2, 0, 2, '-');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('ca36527b-57db-4dc5-8d96-7c49b628cf8c', '2024-09-02 03:10:49.957', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 9, 9, 81, '*');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('08bd666a-c2e6-4e13-8cc4-9535fe4c1927', '2024-09-02 03:10:50.966', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 81, 9, 729, '*');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('3d91a607-d178-4bbd-ac8f-ca6cc3db57a9', '2024-09-02 03:10:51.937', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 729, 9, 6561, '*');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('c4f58934-ec94-4785-85c4-9b7d46f3ac0e', '2024-09-02 03:11:00.102', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 6561, 3, 19683, '*');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('7a192a33-bfff-44ca-9eb1-00b693b682a4', '2024-09-02 03:11:07.267', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 7, 0, 7, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('ab961794-c1a0-4af3-93d2-38922f5d7429', '2024-09-02 03:11:11.139', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 7, 9, 63, '*');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('d987fe09-3c94-47a4-8227-ee27cd8a4b64', '2024-09-02 03:11:12.023', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 63, 6, 378, '*');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('fcb38dde-e802-483d-a70d-e09f6dc39582', '2024-09-02 03:11:13.025', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 378, 3, 1134, '*');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('aa3cacc2-cf76-415e-89e5-cd1adf1d6b85', '2024-09-02 03:11:13.852', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 1134, 3, 3402, '*');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('338988d3-a9be-4995-bcc8-9ca2bc7a402b', '2024-09-02 03:11:14.676', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 3402, 3, 10206, '*');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('005c25c2-dba9-4ca6-a905-bcd1f666fde6', '2024-09-02 03:11:15.539', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 10206, 3, 30618, '*');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('b1596cb6-ebf4-42cb-989e-e82ac71ee881', '2024-09-02 03:11:16.47', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 30618, 3, 91854, '*');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('8a5361b9-ec11-4bdb-9931-1a4cd72c9875', '2024-09-02 03:11:17.494', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 91854, 3, 275562, '*');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('426c5ebb-29ed-4113-b8be-70d2a78be0aa', '2024-09-02 03:11:18.684', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 275562, 3, 826686, '*');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('222098a1-d70b-49a1-a737-fba594ebf023', '2024-09-02 03:11:19.568', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 826686, 3, 2480058, '*');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('276ed80f-db3e-4b9d-9b00-3ba79f42b0e1', '2024-09-02 03:11:20.619', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 2480058, 3, 7440174, '*');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('7716046d-b3d2-4616-97d3-e67783ee4ce5', '2024-09-02 03:11:21.633', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 7440174, 3, 22320522, '*');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('a064697b-2355-4542-a63f-4b89b891dc35', '2024-09-02 03:11:22.512', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 22320522, 3, 66961566, '*');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('1ab83f47-2f97-4037-9267-00d9e252c7be', '2024-09-02 03:11:28.163', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 1, 1, 2, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('ab4027b0-9c8e-4ff4-a61e-3f3d95c7cae0', '2024-09-02 03:11:29.408', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 2, 1, 3, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('4881a33d-1195-4b17-ad63-652526271cfe', '2024-09-02 03:11:30.802', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 3, 1, 4, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('fdfa4b2b-0354-475c-bb2f-744872fabf92', '2024-09-02 03:11:32.259', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 4, 1, 5, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('777ed511-50c8-460e-af14-6a16c45c2255', '2024-09-02 03:11:33.463', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 5, 1, 6, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('6259dab3-28d1-499f-a72b-9bc6ce75fc42', '2024-09-02 03:11:34.528', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 6, 1, 7, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('5d4627f0-9460-4c7b-a40c-cdfe947c2636', '2024-09-02 03:11:37.092', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 7, 1, 8, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('db1b8289-4b86-4738-81b8-cabf41b907dd', '2024-09-02 03:11:40.222', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 8, 0.5, 8.5, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('042205b2-ceab-40c4-807a-02e9d6d3095b', '2024-09-02 03:12:26.316', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 1, 1, 2, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('2f4596fd-5ab6-4512-ba80-69ec14f782fa', '2024-09-02 03:12:27.617', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 2, 1, 3, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('c7463a5d-b8d7-41a5-99b8-b27e6da57dc1', '2024-09-02 03:12:28.989', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 3, 1, 4, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('fa9e56f4-c8d6-438f-a1b9-01333ac62a6d', '2024-09-02 03:12:30.448', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 4, 1, 5, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('a786f197-729d-4d61-9680-f77389854648', '2024-09-02 03:12:31.794', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 5, 1, 6, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('6432218c-fb7e-40d5-987f-75c60a90e940', '2024-09-02 03:12:32.879', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 6, 1, 7, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('656e1c54-fdfc-4896-afeb-6915b153809d', '2024-09-02 03:12:34.061', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 7, 1, 8, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('847061f4-0f86-439e-8b7d-1947453977ca', '2024-09-02 03:12:35.379', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 8, 1, 9, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('185f82d7-fd63-499d-8ab0-fd1899f19377', '2024-09-02 03:12:36.782', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 9, 1, 10, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('0e2d7379-caf6-4f9a-b619-282eb04be972', '2024-09-02 03:12:37.865', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 10, 1, 11, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('9cd4d156-3f99-46ab-b394-0833ae8cbc11', '2024-09-02 03:12:39.353', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 11, 1, 12, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('d3a6a8c9-59df-4217-a3d3-47dbd52696ca', '2024-09-02 03:12:40.709', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 12, 1, 13, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('2d21093f-d9c9-4beb-8005-591516c11ed1', '2024-09-02 03:12:41.81', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 13, 1, 14, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('43cad65a-f9a1-44aa-b7a2-81a333b5f3a0', '2024-09-02 03:12:43.32', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 14, 1, 15, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('570bb393-1d8a-4937-b7c7-be58eb5aad14', '2024-09-02 03:12:44.696', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 15, 1, 16, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('fabbba95-d85a-463f-a811-f7b7a9a95dd9', '2024-09-02 03:12:46.269', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 16, 1, 17, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('cbf40b9b-2ab2-4d36-8de8-60b470df72b5', '2024-09-02 03:12:47.562', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 17, 1, 18, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('c7937de5-f879-4366-9e68-4e5fabfb923e', '2024-09-02 03:12:48.736', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 18, 1, 19, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('5b7e001e-f5b4-4dd8-a759-bf6a3f0c6321', '2024-09-02 03:12:50.157', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 19, 1, 20, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('4723f068-8efe-45c1-9e9b-1d539990d4d2', '2024-09-02 03:12:51.452', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 20, 1, 21, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('e818277b-34b0-4679-b6fb-d193d6d22325', '2024-09-02 03:12:52.658', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 21, 1, 22, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('dc336c25-773b-48b8-b386-91d1f115b70e', '2024-09-02 03:12:53.883', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 22, 1, 23, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('40f57247-432f-4941-a930-58262ddd78bd', '2024-09-02 03:12:55.163', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 23, 1, 24, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('a47fdb3d-420c-4dce-8b13-4b215b27fcd5', '2024-09-02 03:12:56.418', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 24, 1, 25, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('d5322680-8986-4c93-8678-c41acdbbb912', '2024-09-02 03:12:57.705', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 25, 1, 26, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('1aa73d1f-534b-47c6-9c3e-8fd86e724148', '2024-09-02 03:12:59.161', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 26, 1, 27, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('099ae68b-31f4-4aa5-b266-4528e4dd7b6d', '2024-09-02 03:13:14.959', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 27, 1, 28, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('38ecadee-dc86-4fa3-b67f-18dc34e1740d', '2024-09-02 03:13:16.975', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 28, 1, 29, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('98b0915a-d14a-4e2b-a94d-a7792f042826', '2024-09-02 03:13:25.514', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 29, 1, 30, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('6d7d52a0-e8fe-4529-84b7-d9f7222bf3dd', '2024-09-02 03:13:27.287', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 30, 1, 31, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('56c52f67-0495-45ba-9ccf-bad0ec564e16', '2024-09-02 03:13:29.56', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 31, 1, 32, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('53fe1d74-b149-40b2-8676-77fd0e260d57', '2024-09-02 03:13:31.922', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 32, 1, 33, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('c4a94c74-8a6f-48f3-acdf-dc4c5c1b602f', '2024-09-02 03:13:33.642', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 33, 1, 34, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('64cca6ca-1f8b-4ef0-8194-35dd6024af78', '2024-09-02 03:13:34.667', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 34, 1, 35, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('a46a8873-26d7-4856-b3d2-834572cfa1e7', '2024-09-02 03:13:35.802', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 35, 1, 36, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('1782d8e0-d475-4d80-9c1a-559eb53826fd', '2024-09-02 03:13:37.291', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 36, 1, 37, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('ff7ce983-7d59-4ebf-bb03-7e5b69dab29b', '2024-09-02 03:13:38.848', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 37, 1, 38, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('05c0e0c2-ac8e-4d9c-9aa7-b8d865e128ca', '2024-09-02 03:13:40.004', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 38, 1, 39, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('04fd3af1-2975-4b40-abf5-a88e8808f6ea', '2024-09-02 03:13:41.314', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 39, 1, 40, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('1f992d17-7327-4b97-b43d-d31b4afc16e6', '2024-09-02 03:13:42.547', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 40, 1, 41, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('a2b9b538-cf5b-4258-9f6c-ca933ddc3409', '2024-09-02 03:13:44.307', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 41, 1, 42, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('7da57e5b-7b6a-4613-a783-5fb5fbe2c4df', '2024-09-02 03:13:46.463', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 42, 1, 43, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('a1c32a86-8282-4d7f-9dab-78cdc8c1a2cd', '2024-09-02 03:13:47.782', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 43, 1, 44, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('d88fdb21-6d65-42e6-aa50-0c7510a193ed', '2024-09-02 03:13:49.763', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 44, 1, 45, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('b3cde829-c2b3-4375-9b9c-c5beb20921a4', '2024-09-02 03:13:50.992', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 45, 1, 46, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('88ed1a4e-de62-4117-97b8-59da1a70272e', '2024-09-02 03:13:52.309', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 46, 1, 47, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('fa427efa-48b2-45d6-b4bd-59de1fe5d575', '2024-09-02 03:13:53.548', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 47, 1, 48, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('0973cc7c-fc57-4a0d-b68e-3e7d28beebd0', '2024-09-02 03:13:54.724', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 48, 1, 49, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('6bd87465-da57-4b3b-a087-9d6f94af8237', '2024-09-02 03:13:56.04', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 49, 1, 50, '+');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('8d2de3ed-a78e-4c64-a2df-45ad357da42c', '2024-09-02 03:15:13.635', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 5, 29, 0.1724137931034483, '/');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('daa0ad03-378b-499c-bfb9-680e97037636', '2024-09-02 03:15:21.959', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 0.1724137931034483, 9632, 1.790010310459388e-05, '/');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('a23ba902-a0be-4034-b275-ac872a138b08', '2024-09-02 03:15:43.29', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 1.790010310459388e-05, 5.552742666698889e+17, 3.22365075765982e-23, '/');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('5acee97b-e924-4a4e-9031-b2efb460f237', '2024-09-02 03:19:41.754', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 9, 99, 891, '*');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('cbb629cd-f3bf-4fd2-bb16-0a4750c4dc62', '2024-09-02 03:24:29.098', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', 9, 9, 81, '*');
INSERT INTO public."Calculation" (id, created_at, user_id, first_operand, second_operand, result, operator) VALUES ('12848e63-453c-42c2-9444-b18119e0efa5', '2024-09-02 03:25:31.915', '1c342bdc-f73a-4d8e-9daa-242d70dea688', 9, 8, 72, '*');


--
-- Data for Name: Memory; Type: TABLE DATA; Schema: public; Owner: user
--

INSERT INTO public."Memory" (id, created_at, user_id, value) VALUES ('7716db24-4654-41e6-aaa3-15a0c2b83a58', '2024-09-02 03:14:03.475', '6bf3ab8c-0dfa-408b-8d90-57a44a8aa8b7', -9308.172431693207);
INSERT INTO public."Memory" (id, created_at, user_id, value) VALUES ('66e456fb-a2a2-4350-b45e-27f3b183ecd9', '2024-09-02 03:25:35.509', '1c342bdc-f73a-4d8e-9daa-242d70dea688', 71);

--
-- PostgreSQL database dump complete
--

