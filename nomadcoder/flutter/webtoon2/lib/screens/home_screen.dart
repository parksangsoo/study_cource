import 'package:flutter/material.dart';
import 'package:webtoon2/models/webtoon_model.dart';
import 'package:webtoon2/services/api_service.dart';

class HomeScreen extends StatelessWidget {
  HomeScreen({super.key});

  Future<List<WebtoonModel>> webtoons = ApiService.getTodaysToons();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          elevation: 2,
          backgroundColor: Colors.white,
          foregroundColor: Colors.green,
          title: const Text('오늘의 웹툰', style: TextStyle(fontSize: 24))),
      body: FutureBuilder(
        future: webtoons,
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            return const Text("there is data!");
          }
          return const Text("Loading");
        },
      ),
    );
  }
}
