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

 Date: 17/08/2023 01:59:11
*/


-- ----------------------------
-- Table structure for Clubs
-- ----------------------------
DROP TABLE "FPL_PROJECT"."Clubs";
CREATE TABLE "FPL_PROJECT"."Clubs" (
  "ClubName" VARCHAR2(20 BYTE) VISIBLE NOT NULL,
  "Logo" VARCHAR2(255 BYTE) VISIBLE NOT NULL,
  "ClubShortName" NCHAR(3) VISIBLE NOT NULL
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
-- Records of Clubs
-- ----------------------------
INSERT INTO "FPL_PROJECT"."Clubs" VALUES ('Man City', 'null', 'MCI');
INSERT INTO "FPL_PROJECT"."Clubs" VALUES ('Aston Villa', 'null', 'AVL');
INSERT INTO "FPL_PROJECT"."Clubs" VALUES ('Arsenal', 'null', 'ARS');
INSERT INTO "FPL_PROJECT"."Clubs" VALUES ('Manchester United', 'null', 'MUN');
INSERT INTO "FPL_PROJECT"."Clubs" VALUES ('Liverpool ', 'null', 'LIV');
INSERT INTO "FPL_PROJECT"."Clubs" VALUES ('Chelsea', 'null', 'CHE');
INSERT INTO "FPL_PROJECT"."Clubs" VALUES ('Newcastle', 'null', 'NEW');
INSERT INTO "FPL_PROJECT"."Clubs" VALUES ('Brighton', 'null', 'BHA');
INSERT INTO "FPL_PROJECT"."Clubs" VALUES ('Brentford', 'null', 'BRE');
INSERT INTO "FPL_PROJECT"."Clubs" VALUES ('Wolves', 'null', 'WOL');
INSERT INTO "FPL_PROJECT"."Clubs" VALUES ('Crystal Palace', 'null', 'CRY');
INSERT INTO "FPL_PROJECT"."Clubs" VALUES ('West Ham United', 'null', 'WHU');
INSERT INTO "FPL_PROJECT"."Clubs" VALUES ('Burnley', 'null', 'BUR');
INSERT INTO "FPL_PROJECT"."Clubs" VALUES ('Everton', 'null', 'EVE');
INSERT INTO "FPL_PROJECT"."Clubs" VALUES ('Fulham', 'null', 'FUL');
INSERT INTO "FPL_PROJECT"."Clubs" VALUES ('Bournemouth', 'null', 'BOU');
INSERT INTO "FPL_PROJECT"."Clubs" VALUES ('Nottingham Forest', 'null', 'NFO');
INSERT INTO "FPL_PROJECT"."Clubs" VALUES ('Luton Town', 'null', 'LUT');
INSERT INTO "FPL_PROJECT"."Clubs" VALUES ('Shefifeld United', 'null', 'SHU');
INSERT INTO "FPL_PROJECT"."Clubs" VALUES ('Tottenham Hotspur', 'null', 'TOT');

-- ----------------------------
-- Primary Key structure for table Clubs
-- ----------------------------
ALTER TABLE "FPL_PROJECT"."Clubs" ADD CONSTRAINT "SYS_C007838" PRIMARY KEY ("ClubShortName");

-- ----------------------------
-- Checks structure for table Clubs
-- ----------------------------
ALTER TABLE "FPL_PROJECT"."Clubs" ADD CONSTRAINT "SYS_C007836" CHECK ("ClubName" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."Clubs" ADD CONSTRAINT "SYS_C007837" CHECK ("Logo" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
