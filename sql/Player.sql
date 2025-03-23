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

 Date: 16/08/2023 20:11:31
*/


-- ----------------------------
-- Table structure for Player
-- ----------------------------
DROP TABLE "FPL_PROJECT"."Player";
CREATE TABLE "FPL_PROJECT"."Player" (
  "P_ID" NUMBER VISIBLE DEFAULT "FPL_PROJECT"."ISEQ$$_73266".nextval NOT NULL,
  "FirstName" VARCHAR2(20 BYTE) VISIBLE NOT NULL,
  "LastName" VARCHAR2(20 BYTE) VISIBLE NOT NULL,
  "Position" NCHAR(3) VISIBLE NOT NULL,
  "Club" NCHAR(3) VISIBLE NOT NULL,
  "Photo" VARCHAR2(255 BYTE) VISIBLE NOT NULL,
  "Price" NUMBER(3,1) VISIBLE NOT NULL,
  "Availability" NUMBER VISIBLE NOT NULL
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
-- Records of Player
-- ----------------------------
INSERT INTO "FPL_PROJECT"."Player" VALUES ('1', 'Erling', 'Haaland', 'FWD', 'MCI', 'null', '14', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('2', 'Harry', 'Kane', 'FWD', 'TOT', 'null', '12.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('3', 'H.M.', 'Son', 'MID', 'TOT', 'null', '10', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('4', 'Oliver', 'Skipp', 'MID', 'TOT', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('5', 'Julian', 'Alvarez', 'FWD', 'MCI', 'null', '7.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('6', 'Bernardo', 'Silva', 'MID', 'MCI', 'null', '6.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('7', 'Phil', 'Foden', 'MID', 'MCI', 'null', '7.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('8', 'Jack', 'Grealish', 'MID', 'MCI', 'null', '7.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('9', 'Rodrigo', 'Hernandez', 'MID', 'MCI', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('10', 'De', 'Bruyne', 'MID', 'MCI', 'null', '10.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('11', 'Gabriel', 'Jesus', 'FWD', 'ARS', 'null', '8', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('12', 'Bukayo', 'Saka', 'MID', 'ARS', 'null', '8.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('13', 'Gabriel', 'Martinelli', 'MID', 'ARS', 'null', '8', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('14', 'Martin', 'Odegaard', 'MID', 'ARS', 'null', '8.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('15', 'Curtis', 'Jones', 'MID', 'LIV', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('16', 'Ruben', 'Dias', 'DEF', 'MCI', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('17', 'Nathan', 'Ake', 'DEF', 'MCI', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('18', 'Kyle', 'Walker', 'DEF', 'MCI', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('19', 'Rico', 'Lewis', 'DEF', 'MCI', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('20', 'Joao', 'Cancelo', 'DEF', 'MCI', 'null', '6', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('21', 'John', 'Stones', 'DEF', 'MCI', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('22', 'Ederson', 'Moares', 'GKP', 'MCI', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('23', 'Ortega', 'Moreno', 'GKP', 'MCI', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('24', 'William', 'Saliba', 'DEF', 'ARS', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('25', 'Gabriel', 'Santos', 'DEF', 'ARS', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('26', 'Ben', 'White', 'DEF', 'ARS', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('27', 'Oleksandr', 'Zinchenko', 'DEF', 'ARS', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('28', 'Kieran', 'Tierney', 'DEF', 'ARS', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('29', 'Cedric', 'Soares', 'DEF', 'ARS', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('30', 'Aaron', 'Ramsdale', 'GKP', 'ARS', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('31', 'Alex', 'Runarsson', 'GKP', 'ARS', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('32', 'Kai', 'Havertz', 'MID', 'ARS', 'null', '7.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('33', 'Leandro', 'Trossard', 'MID', 'ARS', 'null', '7', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('34', 'Fabio', 'Viera', 'MID', 'ARS', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('35', 'Smith', 'Rowe', 'MID', 'ARS', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('36', 'Eddie', 'Nketiah', 'FWD', 'ARS', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('37', 'Falorin', 'Balogun', 'FWD', 'ARS', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('38', 'James', 'Maddison', 'MID', 'TOT', 'null', '7.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('39', 'Yves', 'Bissouma', 'MID', 'TOT', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('40', 'Dejan', 'Kulusevski', 'MID', 'TOT', 'null', '7', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('41', 'Emile', 'Hojbjerg', 'MID', 'TOT', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('42', 'Dane', 'Scarlett', 'FWD', 'TOT', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('43', 'Ivan', 'Perisic', 'DEF', 'TOT', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('44', 'Emerson', 'Royal', 'DEF', 'TOT', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('45', 'Ben', 'Davies', 'DEF', 'TOT', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('46', 'Eric', 'Dier', 'DEF', 'TOT', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('47', 'Pedro', 'Porro', 'DEF', 'TOT', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('48', 'Guglielmo', 'Vicario', 'GKP', 'TOT', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('49', 'Fraser', 'Forster', 'GKP', 'TOT', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('50', 'Alisson', 'Bekar', 'GKP', 'LIV', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('51', 'Adrian', 'Castillo', 'GKP', 'LIV', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('52', 'Van', 'Dijk', 'DEF', 'LIV', 'null', '6', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('53', 'Alexander', 'Arnold', 'DEF', 'LIV', 'null', '8', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('54', 'Andrew', 'Robertson', 'DEF', 'LIV', 'null', '6.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('55', 'Joel', 'Matip', 'DEF', 'LIV', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('56', 'Konstantinos', 'Tsimikas', 'DEF', 'LIV', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('57', 'Ibrahima', 'Konate', 'DEF', 'LIV', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('58', 'Mohammad', 'Salah', 'MID', 'LIV', 'null', '13', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('59', 'Luis', 'Diaz', 'MID', 'LIV', 'null', '7.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('61', 'Diogo', 'Jota', 'MID', 'LIV', 'null', '8', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('62', 'Harvey', 'Elliott', 'MID', 'LIV', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('63', 'Mac', 'Allister', 'MID', 'LIV', 'null', '6', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('64', 'Cody', 'Gakpo', 'FWD', 'LIV', 'null', '7.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('65', 'Darwin', 'Nunez', 'FWD', 'LIV', 'null', '7.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('66', 'Andre', 'Onana', 'GKP', 'MUN', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('67', 'Dean', 'Henderson', 'GKP', 'MUN', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('68', 'Luke', 'Shaw', 'DEF', 'MUN', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('69', 'Raphael', 'Varane', 'DEF', 'MUN', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('70', 'Wan', 'Bissaka', 'DEF', 'MUN', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('71', 'Diogo', 'Dalot', 'DEF', 'MUN', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('72', 'Lissandro', 'Martinez', 'DEF', 'MUN', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('73', 'Brandon', 'Williams', 'DEF', 'MUN', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('74', 'Marcus', 'Rashford', 'MID', 'MUN', 'null', '9', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('75', 'Bruno', 'Fernandes', 'MID', 'MUN', 'null', '8.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('76', 'Antony', 'Santos', 'MID', 'MUN', 'null', '7', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('77', 'Henrique', 'Casemiro', 'MID', 'MUN', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('78', 'Jadon', 'Sancho', 'MID', 'MUN', 'null', '7', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('79', 'Christian', 'Eriksen', 'MID', 'MUN', 'null', '6', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('80', 'Anthony', 'Martial', 'FWD', 'MUN', 'null', '6.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('81', 'Rasmus', 'Hojlund', 'FWD', 'MUN', 'null', '7', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('82', 'Robert', 'Sanchez', 'GKP', 'CHE', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('83', 'Marcus', 'Bettinelli', 'GKP', 'CHE', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('84', 'Ben', 'Chilwell', 'DEF', 'CHE', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('85', 'Thiago', 'Silva', 'DEF', 'CHE', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('86', 'Reece', 'James', 'DEF', 'CHE', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('87', 'Marc', 'Cucurella', 'DEF', 'CHE', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('88', 'Trevoh', 'Chalobah', 'DEF', 'CHE', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('89', 'Wesley', 'Fofana', 'DEF', 'CHE', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('90', 'Raheem', 'Sterling', 'MID', 'CHE', 'null', '7', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('91', 'Enzo', 'Fernandez', 'MID', 'CHE', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('92', 'Conor', 'Gallagher', 'MID', 'CHE', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('93', 'Mykhailo', 'Mudryk', 'MID', 'CHE', 'null', '6.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('94', 'Christopher', 'Nkunku', 'FWD', 'CHE', 'null', '7.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('95', 'Romelu', 'Lukaku', 'FWD', 'CHE', 'null', '6.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('96', 'Armando', 'Broja', 'FWD', 'CHE', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('97', 'Jason', 'Steele', 'GKP', 'BHA', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('98', 'Tom', 'McGill', 'GKP', 'BHA', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('99', 'Pervis', 'Estupinan', 'DEF', 'BHA', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('100', 'Lewis', 'Dunk', 'DEF', 'BHA', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('101', 'Joel', 'Veltman', 'DEF', 'BHA', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('102', 'Tariq', 'Lamptey', 'DEF', 'BHA', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('103', 'Adam', 'Webster', 'DEF', 'BHA', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('104', 'Karou', 'Mitoma', 'MID', 'BHA', 'null', '6.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('105', 'Solly', 'March', 'MID', 'BHA', 'null', '6.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('106', 'Billy', 'Gilmour', 'MID', 'BHA', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('107', 'Pascal', 'Gross', 'MID', 'BHA', 'null', '6.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('108', 'Julio', 'Enciso', 'MID', 'BHA', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('109', 'Joao', 'Pedro', 'FWD', 'BHA', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('110', 'Danny', 'Welbeck', 'FWD', 'BHA', 'null', '6', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('111', 'Evan', 'Ferguson', 'FWD', 'BHA', 'null', '6', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('112', 'Nick', 'Pope', 'GKP', 'NEW', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('113', 'Martin', 'Dubravka', 'GKP', 'NEW', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('114', 'Fabian', 'Schar', 'DEF', 'NEW', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('115', 'Jamaal', 'Lascelles', 'DEF', 'NEW', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('116', 'Sven', 'Botman', 'DEF', 'NEW', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('117', 'Kieran', 'Trippier', 'DEF', 'NEW', 'null', '6.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('118', 'Dan', 'Burn', 'DEF', 'NEW', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('119', 'Matt', 'Targett', 'DEF', 'NEW', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('120', 'Matt', 'Ritchie', 'MID', 'NEW', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('121', 'Jacob', 'Murphy', 'MID', 'NEW', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('122', 'Bruno', 'Guimaraes', 'MID', 'NEW', 'null', '6', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('123', 'Joelinton', 'Cassio', 'MID', 'NEW', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('124', 'Miguel', 'Almiron', 'MID', 'NEW', 'null', '6.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('125', 'Alexander', 'Isak', 'FWD', 'NEW', 'null', '7.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('126', 'Callum', 'Wilson', 'FWD', 'NEW', 'null', '8', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('127', 'Emiliano', 'Martinez', 'GKP', 'AVL', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('128', 'Robin', 'Olsen', 'GKP', 'AVL', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('129', 'Alex', 'Moreno', 'DEF', 'AVL', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('130', 'Lucas', 'Digne', 'DEF', 'AVL', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('131', 'Tyrone', 'Mings', 'DEF', 'AVL', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('132', 'Kortney', 'Hause', 'DEF', 'AVL', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('133', 'Matty', 'Cash', 'DEF', 'AVL', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('134', 'Jacob', 'Ramsey', 'MID', 'AVL', 'null', '6', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('135', 'John', 'McGinn', 'MID', 'AVL', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('136', 'Leon', 'Bailey', 'MID', 'AVL', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('137', 'Philippe', 'Coutinho', 'MID', 'AVL', 'null', '6', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('138', 'Douglaz', 'Luiz', 'MID', 'AVL', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('139', 'Emiliano', 'Buendia', 'MID', 'AVL', 'null', '6', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('140', 'Ollie', 'Watkins', 'FWD', 'AVL', 'null', '8', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('141', 'Cameron', 'Archer', 'FWD', 'AVL', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('142', 'Norberto', 'Neto', 'GKP', 'BOU', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('143', 'Darren', 'Randolph', 'GKP', 'BOU', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('144', 'Illiya', 'Zabarnyi', 'DEF', 'BOU', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('145', 'Milos', 'Kerkez', 'DEF', 'BOU', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('146', 'Max', 'Aarons', 'DEF', 'BOU', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('147', 'James', 'Hill', 'DEF', 'BOU', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('148', 'Marcos', 'Senesi', 'DEF', 'BOU', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('149', 'Matt', 'Targett', 'DEF', 'BOU', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('150', 'Philip', 'Billing', 'MID', 'BOU', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('151', 'David', 'Brooks', 'MID', 'BOU', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('152', 'Ryan', 'Christie', 'MID', 'BOU', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('153', 'Marcus', 'Tavernier', 'MID', 'BOU', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('154', 'Justin', 'Kluivert', 'MID', 'BOU', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('155', 'Dominic', 'Solanke', 'FWD', 'BOU', 'null', '6.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('156', 'Kieffer', 'Moore', 'FWD', 'BOU', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('157', 'Mark', 'Flekken', 'GKP', 'BRE', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('158', 'Ellery', 'Balcombe', 'GKP', 'BRE', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('159', 'Ben', 'Mee', 'DEF', 'BRE', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('160', 'Rico', 'Henry', 'DEF', 'BRE', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('161', 'Nathan', 'Pinnock', 'DEF', 'BRE', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('162', 'Kristoffer', 'Ajer', 'DEF', 'BRE', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('163', 'Aaron', 'Hickey', 'DEF', 'BRE', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('164', 'Charlie', 'Goode', 'DEF', 'BRE', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('165', 'Bryan', 'Mbeumo', 'MID', 'BRE', 'null', '6.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('166', 'Josh', 'Dasilva', 'MID', 'BRE', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('167', 'Mathias', 'Jensen', 'MID', 'BRE', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('168', 'Vitaly', 'Janelt', 'MID', 'BRE', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('169', 'Christian', 'Norgaard', 'MID', 'BRE', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('170', 'Ivan', 'Toney', 'FWD', 'BRE', 'null', '8', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('171', 'Yoane', 'Wissa', 'FWD', 'BRE', 'null', '6', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('172', 'James', 'Trafford', 'GKP', 'BUR', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('173', 'Arijanet', 'Muric', 'GKP', 'BUR', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('174', 'Ameen', 'Al-Dakhil', 'DEF', 'BUR', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('175', 'Jordan', 'Beyer', 'DEF', 'BUR', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('176', 'Dara', 'OShea', 'DEF', 'BUR', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('177', 'Connor', 'Roberts', 'DEF', 'BUR', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('178', 'Charlie', 'Taylor', 'DEF', 'BUR', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('179', 'Josh', 'Cullen', 'MID', 'BUR', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('180', 'Sander', 'Berge', 'MID', 'BUR', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('181', 'Manuel', 'Benson', 'MID', 'BUR', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('182', 'Josh', 'Brownhill', 'MID', 'BUR', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('183', 'Lyle', 'Foster', 'FWD', 'BUR', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('184', 'Zeki', 'Amdouni', 'FWD', 'BUR', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('185', 'Sam', 'Johnstone', 'GKP', 'CRY', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('186', 'Vicente', 'Guaita', 'GKP', 'CRY', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('187', 'Joachim', 'Andersen', 'DEF', 'CRY', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('188', 'Tyrick', 'Mitchell', 'DEF', 'CRY', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('189', 'Joel', 'Ward', 'DEF', 'CRY', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('190', 'Marc', 'Guehi', 'DEF', 'CRY', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('191', 'James', 'Tomkins', 'DEF', 'CRY', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('192', 'Jordan', 'Ayew', 'MID', 'CRY', 'null', '6.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('193', 'Eberechi', 'Eze', 'MID', 'CRY', 'null', '6.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('194', 'Jeffrey', 'Schulpp', 'MID', 'CRY', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('195', 'Michael', 'Olise', 'MID', 'CRY', 'null', '6', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('196', 'Odsonne', 'Edouard', 'FWD', 'CRY', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('197', 'Philippe', 'Mateta', 'FWD', 'CRY', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('198', 'Jordan', 'Pickford', 'GKP', 'EVE', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('199', 'Joao', 'Virginia', 'GKP', 'EVE', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('200', 'Michael', 'Keane', 'DEF', 'EVE', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('201', 'Nathan', 'Patterson', 'DEF', 'EVE', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('202', 'James', 'Tarkowski', 'DEF', 'EVE', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('203', 'Seamus', 'Coleman', 'DEF', 'EVE', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('204', 'Mason', 'Holgate', 'DEF', 'EVE', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('205', 'Abdoulaye', 'Doucoure', 'MID', 'EVE', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('206', 'Alex', 'Iwobi', 'MID', 'EVE', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('207', 'Amadou', 'Onana', 'MID', 'EVE', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('208', 'Dwight', 'McNeil', 'MID', 'EVE', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('209', 'Demarai', 'Gray', 'MID', 'EVE', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('210', 'Neal', 'Maupay', 'FWD', 'EVE', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('211', 'Calvert', 'Lewin', 'FWD', 'EVE', 'null', '6', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('212', 'Bernd', 'Leno', 'GKP', 'FUL', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('213', 'Marek', 'Rodak', 'GKP', 'FUL', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('214', 'Issa', 'Diop', 'DEF', 'FUL', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('215', 'Tim', 'Ream', 'DEF', 'FUL', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('216', 'Antonee', 'Robinson', 'DEF', 'FUL', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('217', 'Kenny', 'Tete', 'DEF', 'FUL', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('218', 'Kevin', 'Mbabu', 'DEF', 'FUL', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('219', 'Bobby', 'Reid', 'MID', 'FUL', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('220', 'Andreas', 'Pereira', 'MID', 'FUL', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('221', 'Harrison', 'Reed', 'MID', 'FUL', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('222', 'Harry', 'Wilson', 'MID', 'FUL', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('223', 'Willian', 'Silva', 'MID', 'FUL', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('224', 'Aleksander', 'Mitrovic', 'FWD', 'FUL', 'null', '7.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('225', 'Vinicius', 'Morais', 'FWD', 'FUL', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('226', 'Alphonse', 'Areola', 'GKP', 'WHU', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('227', 'Lucasz', 'Fabianski', 'GKP', 'WHU', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('230', 'Nayef', 'Aguerd', 'DEF', 'WHU', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('231', 'Vladimir', 'Coufal', 'DEF', 'WHU', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('232', 'Kurt', 'Zouma', 'DEF', 'WHU', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('233', 'Aaron', 'Cresswell', 'DEF', 'WHU', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('234', 'Thilo', 'Kehrer', 'DEF', 'WHU', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('235', 'Pablo', 'Fornals', 'MID', 'WHU', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('236', 'Tomas', 'Soucek', 'MID', 'WHU', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('237', 'Jarrod', 'Bowen', 'MID', 'WHU', 'null', '7', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('238', 'Said', 'Benrahma', 'MID', 'WHU', 'null', '6', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('239', 'Lucas', 'Paqueta', 'MID', 'WHU', 'null', '6', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('240', 'Michail', 'Antonio', 'FWD', 'WHU', 'null', '6', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('241', 'Danny', 'Ings', 'FWD', 'WHU', 'null', '6', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('242', 'Divin', 'Mubama', 'FWD', 'WHU', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('243', 'Jose', 'Sa', 'GKP', 'WOL', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('244', 'Daniel', 'Bentley', 'GKP', 'WOL', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('245', 'Max', 'Kilman', 'DEF', 'WOL', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('246', 'Craig', 'Dawson', 'DEF', 'WOL', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('247', 'Nelson', 'Semedo', 'DEF', 'WOL', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('248', 'Rayan', 'Ait-Nouri', 'DEF', 'WOL', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('249', 'Hugo', 'Bueno', 'DEF', 'WOL', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('250', 'Pablo', 'Sarabia', 'MID', 'WOL', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('251', 'Pedro', 'Neto', 'MID', 'WOL', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('252', 'Hee', 'Chan', 'MID', 'WOL', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('253', 'Daniel', 'Podence', 'MID', 'WOL', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('254', 'Goncalo', 'Guedes', 'MID', 'WOL', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('255', 'Mario', 'Lemina', 'MID', 'WOL', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('256', 'Fabio', 'Silva', 'FWD', 'WOL', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('257', 'Matheus', 'Cunha', 'FWD', 'WOL', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('258', 'Matt', 'Turner', 'GKP', 'NFO', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('259', 'Ethan', 'Horvath', 'GKP', 'NFO', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('260', 'Serge', 'Aurier', 'DEF', 'NFO', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('261', 'Neco', 'Williams', 'DEF', 'NFO', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('262', 'Joe', 'Worall', 'DEF', 'NFO', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('263', 'Felipe', 'Monteiro', 'DEF', 'NFO', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('264', 'Josh', 'Powell', 'DEF', 'NFO', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('265', 'Anthony', 'Elanga', 'MID', 'NFO', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('266', 'Gibbs', 'White', 'MID', 'NFO', 'null', '6', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('267', 'Danilo', 'Oliveira', 'MID', 'NFO', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('268', 'Brennan', 'Johnson', 'MID', 'NFO', 'null', '6', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('269', 'Ryan', 'Yates', 'MID', 'NFO', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('270', 'Taiwo', 'Awoniyi', 'FWD', 'NFO', 'null', '6.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('271', 'Chris', 'Wood', 'FWD', 'NFO', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('272', 'Adam', 'Davies', 'GKP', 'SHU', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('273', 'Wes', 'Foderingham', 'GKP', 'SHU', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('274', 'John', 'Egan', 'DEF', 'SHU', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('275', 'Jack', 'Robinson', 'DEF', 'SHU', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('276', 'George', 'Baldock', 'DEF', 'SHU', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('277', 'Chris', 'Basham', 'DEF', 'SHU', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('278', 'Max', 'Lowe', 'DEF', 'SHU', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('279', 'Oliver', 'Norwood', 'MID', 'SHU', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('280', 'Ben', 'Osborn', 'MID', 'SHU', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('281', 'John', 'Fleck', 'MID', 'SHU', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('282', 'Andre', 'Brooks', 'MID', 'SHU', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('283', 'Benie', 'Traore', 'FWD', 'SHU', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('284', 'William', 'Osula', 'FWD', 'SHU', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('285', 'Matt', 'Macey', 'GKP', 'LUT', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('286', 'Thomas', 'Kaminski', 'GKP', 'LUT', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('287', 'Alfie', 'Doughty', 'DEF', 'LUT', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('288', 'Issa', 'Kabore', 'DEF', 'LUT', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('289', 'Juel', 'Andersen', 'DEF', 'LUT', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('290', 'Amari', 'Bell', 'DEF', 'LUT', 'null', '4', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('291', 'Pelly', 'Mpanzu', 'MID', 'LUT', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('292', 'Tahith', 'Chong', 'MID', 'LUT', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('293', 'Luke', 'Berry', 'MID', 'LUT', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('294', 'Marvelous', 'Nakamba', 'MID', 'LUT', 'null', '4.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('295', 'Carlton', 'Morris', 'FWD', 'LUT', 'null', '5.5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('296', 'Jacob', 'Brown', 'FWD', 'LUT', 'null', '5', '100');
INSERT INTO "FPL_PROJECT"."Player" VALUES ('297', 'Elijah', 'Adebayo', 'FWD', 'LUT', 'null', '5', '100');

-- ----------------------------
-- Primary Key structure for table Player
-- ----------------------------
ALTER TABLE "FPL_PROJECT"."Player" ADD CONSTRAINT "SYS_C007848" PRIMARY KEY ("P_ID");

-- ----------------------------
-- Checks structure for table Player
-- ----------------------------
ALTER TABLE "FPL_PROJECT"."Player" ADD CONSTRAINT "SYS_C007839" CHECK ("P_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."Player" ADD CONSTRAINT "SYS_C007840" CHECK ("FirstName" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."Player" ADD CONSTRAINT "SYS_C007841" CHECK ("LastName" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."Player" ADD CONSTRAINT "SYS_C007842" CHECK ("Position" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."Player" ADD CONSTRAINT "SYS_C007843" CHECK ("Club" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."Player" ADD CONSTRAINT "SYS_C007844" CHECK ("Photo" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."Player" ADD CONSTRAINT "SYS_C007845" CHECK ("Price" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."Player" ADD CONSTRAINT "SYS_C007846" CHECK ("Availability" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "FPL_PROJECT"."Player" ADD CONSTRAINT "valid_player_position" CHECK ("Position" in ('GKP', 'DEF', 'MID', 'FWD')) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table Player
-- ----------------------------
ALTER TABLE "FPL_PROJECT"."Player" ADD CONSTRAINT "player_of_club" FOREIGN KEY ("Club") REFERENCES "FPL_PROJECT"."Clubs" ("ClubShortName") ON DELETE SET NULL NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
