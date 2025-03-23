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

 Date: 17/08/2023 01:58:52
*/


-- ----------------------------
-- Table structure for Chips
-- ----------------------------
DROP TABLE "FPL_PROJECT"."Chips";
CREATE TABLE "FPL_PROJECT"."Chips" (
  "WildCardWeek" NUMBER(2,0) VISIBLE NOT NULL,
  "BBWeek" NUMBER(2,0) VISIBLE NOT NULL,
  "FHWeek" NUMBER(2,0) VISIBLE NOT NULL,
  "FHPoint" NUMBER(3,0) VISIBLE NOT NULL,
  "BBPoint" NUMBER(3,0) VISIBLE NOT NULL,
  "WCPoint" NUMBER(3,0) VISIBLE NOT NULL,
  "T_ID" NUMBER VISIBLE NOT NULL
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
-- Records of Chips
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table Chips
-- ----------------------------
ALTER TABLE "FPL_PROJECT"."Chips" ADD CONSTRAINT "SYS_C008677" PRIMARY KEY ("T_ID");

-- ----------------------------
-- Checks structure for table Chips
-- ----------------------------
ALTER TABLE "FPL_PROJECT"."Chips" ADD CONSTRAINT "SYS_C008670" CHECK ("WildCardWeek" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."Chips" ADD CONSTRAINT "SYS_C008671" CHECK ("BBWeek" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."Chips" ADD CONSTRAINT "SYS_C008672" CHECK ("FHWeek" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."Chips" ADD CONSTRAINT "SYS_C008673" CHECK ("FHPoint" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."Chips" ADD CONSTRAINT "SYS_C008674" CHECK ("BBPoint" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."Chips" ADD CONSTRAINT "SYS_C008675" CHECK ("WCPoint" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."Chips" ADD CONSTRAINT "SYS_C008676" CHECK ("T_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table Chips
-- ----------------------------
ALTER TABLE "FPL_PROJECT"."Chips" ADD CONSTRAINT "SYS_C008678" FOREIGN KEY ("T_ID") REFERENCES "FPL_PROJECT"."Team" ("TeamId") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
