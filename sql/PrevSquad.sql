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

 Date: 17/08/2023 02:00:54
*/


-- ----------------------------
-- Table structure for PrevSquad
-- ----------------------------
DROP TABLE "FPL_PROJECT"."PrevSquad";
CREATE TABLE "FPL_PROJECT"."PrevSquad" (
  "T_ID" NUMBER VISIBLE NOT NULL,
  "PlayerId" NUMBER VISIBLE NOT NULL,
  "GameWeekId" NUMBER(2,0) VISIBLE NOT NULL,
  "Playing11?" NUMBER VISIBLE DEFAULT 0 NOT NULL
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
-- Records of PrevSquad
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table PrevSquad
-- ----------------------------
ALTER TABLE "FPL_PROJECT"."PrevSquad" ADD CONSTRAINT "SYS_C008725" PRIMARY KEY ("T_ID", "PlayerId", "GameWeekId");

-- ----------------------------
-- Checks structure for table PrevSquad
-- ----------------------------
ALTER TABLE "FPL_PROJECT"."PrevSquad" ADD CONSTRAINT "SYS_C008720" CHECK ("T_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."PrevSquad" ADD CONSTRAINT "SYS_C008721" CHECK ("PlayerId" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."PrevSquad" ADD CONSTRAINT "SYS_C008722" CHECK ("GameWeekId" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."PrevSquad" ADD CONSTRAINT "SYS_C008723" CHECK ("Playing11?" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."PrevSquad" ADD CONSTRAINT "was_staring_XI" CHECK ("Playing11?" in (0, 1)) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table PrevSquad
-- ----------------------------
ALTER TABLE "FPL_PROJECT"."PrevSquad" ADD CONSTRAINT "player_in_prev_squad" FOREIGN KEY ("PlayerId") REFERENCES "FPL_PROJECT"."Player" ("P_ID") ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."PrevSquad" ADD CONSTRAINT "prev_squad_of_team" FOREIGN KEY ("T_ID") REFERENCES "FPL_PROJECT"."Team" ("TeamId") ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."PrevSquad" ADD CONSTRAINT "squad_of_prev_gw" FOREIGN KEY ("GameWeekId") REFERENCES "FPL_PROJECT"."GameWeek" ("gwId") ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
