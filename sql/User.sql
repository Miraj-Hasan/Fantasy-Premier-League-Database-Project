/*
 Navicat Premium Data Transfer

 Source Server         : FPL_PROJECT
 Source Server Type    : Oracle
 Source Server Version : 190000 (Oracle Database 19c Enterprise Edition Release 19.0.0.0.0 - Production)
 Source Host           : 0.0.0.0:1521
 Source Schema         : FPL_PROJECT

 Target Server Type    : Oracle
 Target Server Version : 190000 (Oracle Database 19c Enterprise Edition Release 19.0.0.0.0 - Production)
 File Encoding         : 65001

 Date: 17/08/2023 02:01:25
*/


-- ----------------------------
-- Table structure for User
-- ----------------------------
DROP TABLE "FPL_PROJECT"."User";
CREATE TABLE "FPL_PROJECT"."User" (
  "UserName" VARCHAR2(20 BYTE) VISIBLE NOT NULL,
  "UserId" NUMBER VISIBLE DEFAULT "FPL_PROJECT"."USERIDNUMBER".nextval NOT NULL,
  "Email" VARCHAR2(100 BYTE) VISIBLE NOT NULL,
  "Password" VARCHAR2(128 BYTE) VISIBLE NOT NULL,
  "Country" VARCHAR2(20 BYTE) VISIBLE NOT NULL,
  "FavClub" NCHAR(3) VISIBLE NOT NULL
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of User
-- ----------------------------
INSERT INTO "FPL_PROJECT"."User" VALUES ('fplFreak', '4', 'acs@gmail.com', '234562', 'Fuji', 'CHE');
INSERT INTO "FPL_PROJECT"."User" VALUES ('Nobo', '1', 'dipantonobo@gmail.com', '12345', 'Bangladesh', 'LIV');
INSERT INTO "FPL_PROJECT"."User" VALUES ('Miraj', '2', 'miraj@gmail.com', '23456', 'Bangladesh', 'MUN');
INSERT INTO "FPL_PROJECT"."User" VALUES ('Haaland', '3', 'halland@gmail.com', '34567', 'Norway', 'MCI');

-- ----------------------------
-- Primary Key structure for table User
-- ----------------------------
ALTER TABLE "FPL_PROJECT"."User" ADD CONSTRAINT "SYS_C007803" PRIMARY KEY ("UserId");

-- ----------------------------
-- Uniques structure for table User
-- ----------------------------
ALTER TABLE "FPL_PROJECT"."User" ADD CONSTRAINT "user_unique_email" UNIQUE ("Email") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Checks structure for table User
-- ----------------------------
ALTER TABLE "FPL_PROJECT"."User" ADD CONSTRAINT "SYS_C007797" CHECK ("UserName" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."User" ADD CONSTRAINT "SYS_C007798" CHECK ("UserId" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."User" ADD CONSTRAINT "SYS_C007799" CHECK ("Email" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."User" ADD CONSTRAINT "SYS_C007800" CHECK ("Password" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."User" ADD CONSTRAINT "SYS_C007801" CHECK ("Country" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."User" ADD CONSTRAINT "SYS_C007802" CHECK ("FavClub" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
