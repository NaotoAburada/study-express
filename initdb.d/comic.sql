DROP database IF EXISTS comic;
CREATE database comic;
USE comic;

DROP TABLE IF EXISTS comic;

CREATE TABLE comic
(
  title    VARCHAR(40),
  category     VARCHAR(40),
  volume int(10) NOT NULL,
  story int(10) NOT NULL
);

insert into comic values ('タイトル001','アクション',20,0);
insert into comic values ('タイトル002','スポーツ',0,160);
insert into comic values ('タイトル003','ファンタジー',10,120);
