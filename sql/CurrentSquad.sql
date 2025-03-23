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

 Date: 17/08/2023 01:59:27
*/


-- ----------------------------
-- Table structure for CurrentSquad
-- ----------------------------
DROP TABLE "FPL_PROJECT"."CurrentSquad";
CREATE TABLE "FPL_PROJECT"."CurrentSquad" (
  "T_ID" NUMBER VISIBLE NOT NULL,
  "PlayerId" NUMBER VISIBLE NOT NULL,
  "BuyDate" TIMESTAMP(6) VISIBLE,
  "BuyPrice" NUMBER(3,1) VISIBLE NOT NULL,
  "SellDate" TIMESTAMP(6) VISIBLE,
  "SellPrice" NUMBER(3,1) VISIBLE NOT NULL,
  "Playing11?" NUMBER VISIBLE DEFAULT 0 NOT NULL,
  "GameWeekId" NUMBER VISIBLE NOT NULL
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of CurrentSquad
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table CurrentSquad
-- ----------------------------
ALTER TABLE "FPL_PROJECT"."CurrentSquad" ADD CONSTRAINT "SYS_C008716" PRIMARY KEY ("T_ID", "PlayerId");

-- ----------------------------
-- Checks structure for table CurrentSquad
-- ----------------------------
ALTER TABLE "FPL_PROJECT"."CurrentSquad" ADD CONSTRAINT "SYS_C008709" CHECK ("T_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."CurrentSquad" ADD CONSTRAINT "SYS_C008710" CHECK ("PlayerId" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."CurrentSquad" ADD CONSTRAINT "SYS_C008711" CHECK ("BuyPrice" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."CurrentSquad" ADD CONSTRAINT "SYS_C008712" CHECK ("SellPrice" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."CurrentSquad" ADD CONSTRAINT "SYS_C008713" CHECK ("Playing11?" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."CurrentSquad" ADD CONSTRAINT "SYS_C008714" CHECK ("GameWeekId" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."CurrentSquad" ADD CONSTRAINT "staring_XI" CHECK ("Playing11?" in (0, 1)) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table CurrentSquad
-- ----------------------------
ALTER TABLE "FPL_PROJECT"."CurrentSquad" ADD CONSTRAINT "current_squad_of_team" FOREIGN KEY ("T_ID") REFERENCES "FPL_PROJECT"."Team" ("TeamId") ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."CurrentSquad" ADD CONSTRAINT "player_in_current_squad" FOREIGN KEY ("PlayerId") REFERENCES "FPL_PROJECT"."Player" ("P_ID") ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."CurrentSquad" ADD CONSTRAINT "squad_of_current_gw" FOREIGN KEY ("GameWeekId") REFERENCES "FPL_PROJECT"."GameWeek" ("gwId") ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
