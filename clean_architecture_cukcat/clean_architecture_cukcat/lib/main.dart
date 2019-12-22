import 'package:domain/entitiy/advertise_notice.dart';
import 'package:domain/entitiy/advertise_notice_item.dart';
import 'package:domain/usecase/advertise_notice_usecase.dart';
import 'package:feature/cukcat_home/cukcat_home.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:presentation/cukcat_home/cukcat_home_bloc.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: BlocProvider(
        create: (BuildContext context) =>
            CukCatHomeBloc(AdvertiseNoticeUseCase(Dummy())),
        child: CukCatHomeScreen(),
      ),
    );
  }
}

class Dummy extends IAdvertiseNoticeRepository {
  @override
  Future<List<AdvertiseNoticeItem>> fetchPopularItem() {
    return Future.delayed(
        Duration(seconds: 2),
        () => [
              AdvertiseNoticeItem("동아리 1번 손님"),
              AdvertiseNoticeItem("동아리 1번 손님"),
              AdvertiseNoticeItem("동아리 1번 손님"),
              AdvertiseNoticeItem("동아리 1번 손님"),
            ]);
  }

  @override
  Future<AdvertiseNotice> fetchPreviewsAdvertiseNotice() {
    // TODO: implement fetchPreviewsAdvertiseNotice
    return null;
  }

  @override
  Future<List<AdvertiseNotice>> fetchPreviewsAdvertiseNotices() {
    // TODO: implement fetchPreviewsAdvertiseNotices
    return null;
  }

  @override
  Future<AdvertiseNotice> insertAdvertiseNotice(
      AdvertiseNoticeItem advertiseNoticeItem) {
    // TODO: implement insertAdvertiseNotice
    return null;
  }
}
