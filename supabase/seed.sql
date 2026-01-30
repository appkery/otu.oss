SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.6
-- Dumped by pg_dump version 15.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', '1941e5bc-2404-433b-9556-c86f5190c07e', 'authenticated', 'authenticated', 'test@opentutorials.org', '$2a$10$xsPmUYcVSLkvC4ZqVMYNS.gP9xltMqdDbNfzJ1cqdvqKAZJqsNftS', '2024-10-04 01:18:43.141644+00', NULL, '', NULL, '', NULL, '', '', NULL, '2025-09-21 11:33:01.040924+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "1941e5bc-2404-433b-9556-c86f5190c07e", "email": "test@opentutorials.org", "email_verified": false, "phone_verified": false, "privacy_policy_consent_version": "2024-6-20", "terms_of_service_consent_version": "2024-6-20", "privacy_policy_consent_updated_at": "2025-09-20T02:18:34.315Z", "terms_of_service_consent_updated_at": "2025-09-20T02:18:34.214Z"}', NULL, '2024-10-04 01:18:43.13757+00', '2025-09-21 11:33:01.042013+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('1941e5bc-2404-433b-9556-c86f5190c07e', '1941e5bc-2404-433b-9556-c86f5190c07e', '{"sub": "1941e5bc-2404-433b-9556-c86f5190c07e", "email": "test@opentutorials.org", "email_verified": false, "phone_verified": false}', 'email', '2024-10-04 01:18:43.139783+00', '2024-10-04 01:18:43.139802+00', '2024-10-04 01:18:43.139802+00', 'ea463744-fb0a-4bf5-9b5e-ea884d477e17');

--
-- Data for Name: user_info; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."user_info" ("id", "user_id", "updated_at", "created_at", "nickname", "marketing_consent_update_at", "marketing_consent_version", "privacy_policy_consent_updated_at", "privacy_policy_consent_version", "terms_of_service_consent_update_at", "terms_of_service_consent_version", "profile_img_url", "timezone") VALUES
	(1, '1941e5bc-2404-433b-9556-c86f5190c07e', '2025-09-20 02:49:02.154662+00', '2025-09-20 02:49:02.154662+00', 'egoing', '2025-09-20 02:49:02.154662+00', NULL, '2025-09-20 02:49:02.154662+00', NULL, '2025-09-20 02:49:02.154662+00', NULL, '', 'Asia/Seoul');

--
-- PostgreSQL database dump complete
--

RESET ALL;