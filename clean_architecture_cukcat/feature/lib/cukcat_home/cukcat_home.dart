import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:presentation/cukcat_home/cukcat_home_bloc.dart';
import 'package:presentation/cukcat_home/cukcat_home_event.dart';
import 'package:presentation/cukcat_home/cukcat_home_view_state.dart';

class CukCatHomeScreen extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return CukCatHomeScreenState();
  }
}

class CukCatHomeScreenState extends State<CukCatHomeScreen> {
  CukCatHomeBloc cukCatHomeBloc;

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<CukCatHomeBloc, CukCatHomeViewState>(
      bloc: cukCatHomeBloc,
      builder: (context, CukCatHomeViewState viewState) => Scaffold(
        appBar: AppBar(),
        body: Stack(
          children: <Widget>[
            if (viewState.popularItems.length > 0)
              ListView.builder(
                  itemCount: viewState.popularItems.length,
                  itemBuilder: (context, index) {
                    return Text(viewState.popularItems[index].id);
                  }),
            if (viewState.isShowLoadingBar)
              Container(
                child: Text("Loading"),
              )
          ],
        ),
      ),
    );
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    cukCatHomeBloc = BlocProvider.of<CukCatHomeBloc>(context);
    cukCatHomeBloc.add(StartAdvertiseNoticeEvent());
  }
}
